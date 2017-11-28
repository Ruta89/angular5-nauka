import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit() {
    this.tasksList = ['zad1', 'zad2', 'zad3', 'zad4'];
  }

  add(task: string) {
    this.tasksList.push(task);
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
