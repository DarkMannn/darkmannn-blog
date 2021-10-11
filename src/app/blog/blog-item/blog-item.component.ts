import {
    Component,
    OnInit,
    AfterViewChecked,
    ViewEncapsulation,
} from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

import { HighlightService } from '../../services/highlight.service';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.css'],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
})
export class BlogItemComponent implements OnInit, AfterViewChecked {
    currentLink!: ScullyRoute;

    constructor(
        private scully: ScullyRoutesService,
        private highlightService: HighlightService
    ) {}

    ngOnInit() {
        this.scully.getCurrent().subscribe((curLink) => {
            this.currentLink = curLink;
        });
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
