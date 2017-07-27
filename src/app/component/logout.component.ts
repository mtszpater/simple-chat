import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
    providers: [CookieService],
    selector: 'app-logout',
    templateUrl: '../html/logout.component.html'
})

export class LogoutComponent {

    constructor(private _cookieService: CookieService) {
    }

    public logOut() {
        this._cookieService.remove('name');
    }
}
