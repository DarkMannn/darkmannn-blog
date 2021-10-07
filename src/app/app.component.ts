import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    YEAR = new Date().getFullYear();
    NICKNAME = 'darkmannn';
    EMAIL = 'darko.milosevic@darkmannn.dev';
}
