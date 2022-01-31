import {
    Component,
    OnInit,
    AfterViewChecked,
    ViewEncapsulation,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
        private title: Title,
        private meta: Meta,
        private scully: ScullyRoutesService,
        private highlightService: HighlightService
    ) {}

    ngOnInit() {
        this.scully.getCurrent().subscribe((curLink) => {
            this.currentLink = curLink;
            if (this.currentLink?.title) {
                this.title.setTitle(this.currentLink.title);
            }
            if (this.currentLink?.description) {
                this.meta.addTag({
                    name: 'description',
                    content: this.currentLink.description,
                });
            }
            if (this.currentLink?.keywords) {
                this.meta.addTag({
                    name: 'keywords',
                    content: this.currentLink.keywords,
                });
            }
        });
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
