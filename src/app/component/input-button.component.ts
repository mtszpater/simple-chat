import {Component, Input} from '@angular/core';
import {Post} from '../entity/post';
import {PostService} from '../service/post.service';
import {CookieService} from 'angular2-cookie/core';
import {User} from '../entity/user';

@Component({
    selector: 'app-input-button',
    providers: [PostService, CookieService],
    templateUrl: '../html/input-button.component.html'
})
export class InputButtonComponent {
    @Input() post: Post;
    user: User;

    constructor(private postService: PostService, private _cookieService: CookieService) {
        this.post = new Post;
        this.user = new User;

    }

    save(post: Post): void {
        this.user.name = this._cookieService.get('name');
        post.user = this.user;
        post.date = Date.now();
        this.postService.save(post);
        this.post = new Post;
    }
}
