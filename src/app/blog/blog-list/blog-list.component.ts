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

    filteredLinksCount!: number;

    filteredLinksLoadedSum = 0;

    allLinksLoaded = false;

    constructor(private scully: ScullyRoutesService) {}

    ngOnInit() {
        this.allLinks$.subscribe((links) => {
            const isBlogRoutePredicate = (route: ScullyRoute) => route?.title;
            this.filteredLinks = links.filter(isBlogRoutePredicate);
            this.filteredLinksCount = this.filteredLinks.length;
        });
    }

    onLinkLoad() {
        this.filteredLinksLoadedSum++;
        if (this.filteredLinksLoadedSum >= this.filteredLinksCount) {
            this.allLinksLoaded = true;
        }
    }
}
