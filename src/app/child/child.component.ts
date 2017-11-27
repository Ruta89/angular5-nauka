import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inputText: string;
  @Input() inputCar: Car;
  show = true;

  constructor() {}

  ngOnInit(): void {}

  content() {
    this.show = !this.show;
  }
}
