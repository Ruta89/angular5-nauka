import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksList: Array<string>;
  constructor() {
    this.tasksList = ['zrobic pranie', 'wczasy pod grusza', 'kupic prezent'];
  }
}
