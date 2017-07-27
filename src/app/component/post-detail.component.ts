import {Component, Input} from '@angular/core';
import {Post} from '../entity/post';
import {PostService} from '../service/post.service';

@Component({
    selector: 'app-post-detail',
    providers: [PostService],
    templateUrl: '../html/post-detail.component.html'
})
export class PostDetailComponent {
    @Input() post: Post;

    constructor(private postService: PostService) {
    }
}
