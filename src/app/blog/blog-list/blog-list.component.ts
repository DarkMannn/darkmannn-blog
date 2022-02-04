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
            this.filteredLinks = links
                .filter(isBlogRoutePredicate)
                .sort(BlogListComponent.compareRoutesByDate);
            this.filteredLinksCount = this.filteredLinks.length;
        });
    }

    onLinkLoad() {
        this.filteredLinksLoadedSum++;
        if (this.filteredLinksLoadedSum >= this.filteredLinksCount) {
            this.allLinksLoaded = true;
        }
    }

    static compareRoutesByDate(
        scullyRoute1: ScullyRoute,
        scullyRoute2: ScullyRoute
    ) {
        return BlogListComponent.compareDates(
            scullyRoute1.date,
            scullyRoute2.date
        );
    }

    static compareDates(date1: string, date2: string): number {
        const [day1, month1, year1] = date1
            .split('/')
            .map((num) => parseInt(num));
        const [day2, month2, year2] = date2
            .split('/')
            .map((num) => parseInt(num));

        if (year1 !== year2) {
            return year2 - year1;
        } else if (month1 !== month2) {
            return month2 - month1;
        } else {
            return day2 - day1;
        }
    }
}
