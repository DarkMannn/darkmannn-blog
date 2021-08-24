import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
    {
        path: '',
        component: BlogListComponent,
    },
    {
        path: ':slug',
        component: BlogItemComponent,
    },
    {
        path: '**',
        component: BlogListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}
