import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  getPosts() {
    console.log('getPosts');
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
  getPost(id: number) {
    console.log('getPost');
    this.httpService.getPost(id).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser(userId: number) {
    console.log('getPostByUser');
    this.httpService.getPostByUser(userId).subscribe(userPosts => {
      console.log(userPosts);
    });
  }
  addPost() {
    const post: Post = {
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszsy post o angularze!'
    };
  }
  updatePost() {
    const p: Post = {
      userId: 1,
      id: 1,
      title: 'Mój post uaktualniony',
      body: 'Pierwszsy post o angularze! uaktualniony'
    };
  }
  deletePost() {}
  changePost() {
    const p: Post = {
      id: 1,
      body: 'zmieniam tylko wpis'
    };
  }
}
