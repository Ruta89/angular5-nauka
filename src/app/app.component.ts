import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();

  days = ['Pon', 'Wto', 'Sro', 'Czw', 'Pia', 'Sob', 'Nie'];

  cars = new Array<Car>();
  constructor() {
    this.cars.push(new Car('Clio', 1997), new Car('Yaris', 2003));
  }
}

class Car {
  constructor(public name: string, public year: number) {}
}
