import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
    links$: Observable<ScullyRoute[]> = this.scully.available$;

    constructor(private scully: ScullyRoutesService) {}

    ngOnInit() {
        // debug current pages
        this.links$.subscribe((links) => {
            console.log(links);
        });
    }
}
