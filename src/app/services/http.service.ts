import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
  getPostByUser(userId: number): Observable<Array<Post>> {
    const parm = new HttpParams().set('userId', userId + '');

    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts/',
      { params: parm }
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + post.id,
      post
    );
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
  changePost(post: Post) {
    return this.http.patch(
      'https://jsonplaceholder.typicode.com/posts/' + post.id,
      post
    );
  }
}
