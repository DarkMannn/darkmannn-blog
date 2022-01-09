import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'slow-programmer',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'blog',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./blog/blog.module').then((m) => m.BlogModule),
            },
        ],
    },
    { path: '**', redirectTo: 'slow-programmer/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
