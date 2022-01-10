import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    rows = [
        ['who'],
        ['developer', 'blogger', 'minimalist'],
        ['what'],
        ['typescript', 'full-stack', 'aws'],
        ['how'],
        ['slowly', 'thoroughly', 'with_focus'],
    ];

    constructor() {}

    ngOnInit() {}
}
