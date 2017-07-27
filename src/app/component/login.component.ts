import {Component} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {LoginContentComponent} from './login-content.component';
import {CookieService} from 'angular2-cookie/core';

@Component({
    providers: [CookieService],
    selector: 'app-login',
    templateUrl: '../html/login.component.html'

})

export class LoginComponent {

    constructor(private modalService: BsModalService, private _cookieService: CookieService) {
        if (!this.isLogged()) {
            this.openModalWithComponent();
        }
    }

    public openModalWithComponent() {
        this.modalService.show(LoginContentComponent);
    }

    public isLogged() {
        if (this._cookieService.get('name')) {
            return true;
        } else {
            return false;
        }
    }
}
