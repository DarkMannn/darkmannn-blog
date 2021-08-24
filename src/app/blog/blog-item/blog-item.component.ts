import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.css'],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
})
export class BlogItemComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}
}
