import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
    allLinks$: Observable<ScullyRoute[]> = this.scully.available$;
    filteredLinks!: ScullyRoute[];

    constructor(private scully: ScullyRoutesService) {}

    ngOnInit() {
        this.allLinks$.subscribe((links) => {
            // DELETEME: Remove this
            console.log(links);
            const isBlogRoute = (route: ScullyRoute) => route?.title;
            this.filteredLinks = links.filter(isBlogRoute);
        });
    }
}
