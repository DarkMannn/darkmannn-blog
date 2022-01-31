import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
    rows = [
        ['who'],
        ['developer', 'blogger', 'minimalist'],
        ['what'],
        ['typescript', 'full-stack', 'aws'],
        ['how'],
        ['thorough', 'unbiased', 'open_minded'],
    ];
    NICKNAME = 'darkmannn';
    EMAIL = 'darko.milosevic@darkmannn.dev';

    constructor() {}

    ngOnInit() {}
}
