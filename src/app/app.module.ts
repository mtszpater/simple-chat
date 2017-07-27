import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/app.component';
import {FormsModule} from '@angular/forms';
import {PostDetailComponent} from './component/post-detail.component';
import {AlertModule} from 'ngx-bootstrap';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ModalModule} from 'ngx-bootstrap/modal';
import {InputButtonComponent} from './component/input-button.component';
import {LoginComponent} from './component/login.component';
import {LoginContentComponent} from './component/login-content.component';
import {LogoutComponent} from './component/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        PostDetailComponent,
        InputButtonComponent,
        LoginComponent,
        LogoutComponent,
        LoginContentComponent
    ],
    entryComponents: [
        LoginContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
