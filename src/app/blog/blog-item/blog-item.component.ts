import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.css'],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
})
export class BlogItemComponent implements OnInit {
    currentLink!: ScullyRoute;

    constructor(private scully: ScullyRoutesService) {}

    ngOnInit() {
        this.scully.getCurrent().subscribe((curLink) => {
            this.currentLink = curLink;
        });
    }
}
