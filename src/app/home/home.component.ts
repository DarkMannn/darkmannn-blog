import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    rows = [
        ['Developer', 'Blogger', 'Minimalist'],
        ['Typescript', 'Full stack', 'AWS'],
        ['Simplicity', 'Deliberation', 'Slowness'],
    ];

    constructor() {}

    ngOnInit() {}
}
