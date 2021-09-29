import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogThumbnailComponent } from './blog-thumbnail/blog-thumbnail.component';

@NgModule({
    declarations: [
        BlogItemComponent,
        BlogListComponent,
        BlogThumbnailComponent,
    ],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
