import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-thumbnail',
    templateUrl: './blog-thumbnail.component.html',
    styleUrls: ['./blog-thumbnail.component.css'],
})
export class BlogThumbnailComponent {
    @Input() thumbnail: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() date: string = '';
    @Input() tag: string = '';
    @Input() link: string = '';

    @Output() load = new EventEmitter<void>();

    constructor(private _router: Router) {}

    openBlogItem() {
        this._router.navigateByUrl(this.link);
    }

    onLoad() {
        this.load.emit();
    }
}
