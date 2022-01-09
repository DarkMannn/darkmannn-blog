import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    rows = [
        ['WHO'],
        ['developer', 'blogger', 'minimalist'],
        ['WHAT'],
        ['typescript', 'full-stack', 'aws'],
        ['HOW'],
        ['slowly', 'thoroughly', 'with_focus'],
    ];

    constructor() {}

    ngOnInit() {}
}
