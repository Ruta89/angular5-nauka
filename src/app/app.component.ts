import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Seat Ibiza';
  date = new Date();

  car = new Car('Tico', 2000);

  showCar() {
    return 'Moj samochod to ' + this.car.name + ' rocznik: ' + this.car.year;
  }
}

class Car {
  constructor(public name: string, public year: number) {}
}
