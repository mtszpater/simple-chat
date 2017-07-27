import {Component} from '@angular/core';
import {Post} from '../entity/post';
import {PostService} from '../service/post.service';
import {CookieService} from 'angular2-cookie/core';


@Component({
    selector: 'app-root',
    providers: [PostService, CookieService],
    styleUrls: ['../css/app.component.css'],
    templateUrl: '../html/app.component.html'
})

export class AppComponent {
    posts: Post[];
    name: string;

    constructor(private postService: PostService, private _cookieService: CookieService) {
        this.posts = this.postService.getPosts();
    }

    public isLogged() {
        if (this._cookieService.get('name')) {
            this.name = this._cookieService.get('name');
            return true;
        } else {
            return false;
        }
    }
}
