import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ClickService]   lub tutaj zamiast w appModule
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
