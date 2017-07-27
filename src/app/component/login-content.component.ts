import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/modal-options.class';
import {User} from '../entity/user';
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
    providers: [CookieService],
    templateUrl: '../html/login-content.component.html'
})

export class LoginContentComponent {
    public title = 'Login';
    @Input() public user = new User;

    constructor(public bsModalRef: BsModalRef, private _cookieService: CookieService) {}

    save() {
        this.bsModalRef.hide();
        this._cookieService.put('name', this.user.name);
    }

}


