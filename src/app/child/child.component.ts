import {
  Component,
  OnInit,
  Input,
  // Output,
  // EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Car } from '../../models/car';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() inputText: string;
  @Input() inputCar: Car;
  show = true;

  constructor() {}
  /**
   * Uruchamia się na początuku ngOnInit
   * Sprawdza czy zmieniły się zbindowane pola komponentu
   * Musi zmieniac sie referencja!
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! - #1');
    console.log(changes);
  }
  ngOnInit(): void {}

  content() {
    this.show = !this.show;
  }
}
