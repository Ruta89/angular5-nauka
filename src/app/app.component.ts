import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Seat Ibiza';
  date = new Date();

  car: Car;
}

class Car {
  constructor(public name: string, public year: number) {}
}
