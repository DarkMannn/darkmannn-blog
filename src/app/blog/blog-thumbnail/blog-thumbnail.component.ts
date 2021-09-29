import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-thumbnail',
    templateUrl: './blog-thumbnail.component.html',
    styleUrls: ['./blog-thumbnail.component.css'],
})
export class BlogThumbnailComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() link: string = '';

    openBlogItem() {
        console.log(this.link);
    }
}
