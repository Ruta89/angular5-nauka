import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  allPosts$: Observable<Array<Post>>;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  getPosts() {
    console.log('getPosts');
    this.allPosts$ = this.httpService.getPosts();
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

    this.httpService.addPost(post).subscribe(dodajePost => {
      console.log(dodajePost);
    });
  }

  updatePost() {
    const p: Post = {
      userId: 1,
      id: 1,
      title: 'Mój post uaktualniony',
      body: 'Pierwszsy post o angularze! uaktualniony'
    };
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost(id) {
    console.log(id);
    this.httpService.deletePost(id).subscribe(delPost => {
      console.log(delPost);
    });
  }

  changePost() {
    const p: Post = {
      id: 1,
      body: 'zmieniam tylko wpis'
    };

    this.httpService.changePost(p).subscribe(patchWork => {
      console.log(patchWork);
    });
  }
}
