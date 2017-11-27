import {
  Component,
  OnInit,
  Input,
  // Output,
  // EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { Car } from '../../models/car';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
  implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() inputText: string;
  @Input() inputCar: Car;
  show = true;

  constructor() {
    console.log('constructor - uruchomione! - #0');
  }
  /**
   * Uruchamia się na początuku ngOnInit
   * Sprawdza czy zmieniły się zbindowane pola komponentu
   * Musi zmieniac sie referencja!
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! - #1');
    console.log(changes);
  }

  /**
   * Uruchamia się jeden raz podczas inicjalizacji komponentu
   * Uruchomi się po konstruktorze i po ngOnChange
   */
  ngOnInit(): void {
    console.log('ngOnInit - uruchomione - #2');
    this.inputCar.name = 'Ford';
  }

  /**
   * Uruchamia się przy zmianie, wywołaniu eventa etc
   */
  ngDoCheck(): void {
    console.log('NgDoCheck - uruchomione! - #3');
  }
  /**
   * Uruchamia się po inicjalizacji np <ng-content>
   */

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - uruchomione! - #4');
  }
  /**
   * Uruchamia się po każdej zmianie  np <ng-content>
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - uruchomione! - #5');
  }

  /**
   * Uruchamia się po inicjalizacji widoku
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - uruchomione! - #6');
  }
  /**
   * Uruchamia się po każdej zmianie w widoku
   */

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - uruchomione! - #7');
  }

  /**
   * Uruchamia się po każdej zmianie widoku
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy - uruchomione! - #8');
  }

  content() {
    this.show = !this.show;
  }
}
