import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
    declarations: [BlogItemComponent, BlogListComponent],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
