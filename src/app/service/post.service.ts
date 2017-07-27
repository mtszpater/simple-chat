import {Injectable} from '@angular/core';

import {Post} from '../entity/post';
import {POSTS} from '../mock/mock-posts';


@Injectable()
export class PostService {
    getPosts(): Post[] {
        return POSTS;
    }
    save(post: Post) {
        post.id = POSTS.length+1;
        POSTS.unshift(post);
    }
}
