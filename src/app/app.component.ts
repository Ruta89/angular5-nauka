import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nauka angulara 5';
  car = new Car('Mazda');
  show = true;

  changeTitle() {
    this.title = 'Angular jest zajebisty!';
  }
  changeCar() {
    this.car.name = 'Ferari';
  }
  nothing() {}
  destroy() {
    this.show = !this.show;
  }
}
export class Car {
  constructor(public name: string) {}
}
