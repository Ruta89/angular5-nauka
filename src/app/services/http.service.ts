import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
// import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getPosts() {}
  getPost(id: number) {}
  getPostByUser(userId: number) {}
  addPost(post: Post) {}
  updatePost(post: Post) {}
  deletePost(id: number) {}
  changePost(post: Post) {}
}
