import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
// import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getPost(id: number) {}
  getPostByUser(userId: number) {}
  addPost(post: Post) {}
  updatePost(post: Post) {}
  deletePost(id: number) {}
  changePost(post: Post) {}
}
