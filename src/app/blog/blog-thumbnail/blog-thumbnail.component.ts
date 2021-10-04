import { Component, Input } from '@angular/core';

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

    openBlogItem() {
        console.log(this.link);
    }
}
