import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';

@NgModule({
    declarations: [AuthorComponent],
    imports: [
        CommonModule,
        AuthorRoutingModule,
        AngularSvgIconModule.forRoot(),
    ],
})
export class AuthorModule {}
