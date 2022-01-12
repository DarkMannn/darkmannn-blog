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
                path: 'about',
                loadChildren: () =>
                    import('./about/about.module').then((m) => m.AboutModule),
            },
            {
                path: 'author',
                loadChildren: () =>
                    import('./author/author.module').then(
                        (m) => m.AuthorModule
                    ),
            },
            {
                path: 'blog',
                loadChildren: () =>
                    import('./blog/blog.module').then((m) => m.BlogModule),
            },
        ],
    },
    { path: '**', redirectTo: 'slow-programmer/about' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
