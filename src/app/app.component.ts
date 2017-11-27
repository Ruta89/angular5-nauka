import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Car } from '../models/car';
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
    this.car = new Car('Viper');
  }
  nothing() {}
  destroy() {
    this.show = !this.show;
  }
}
