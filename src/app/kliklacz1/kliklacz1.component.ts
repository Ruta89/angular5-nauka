import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';
@Component({
  selector: 'app-kliklacz1',
  templateUrl: './kliklacz1.component.html',
  styleUrls: ['./kliklacz1.component.css']
})
export class Kliklacz1Component implements OnInit {
  click = 0;

  constructor(private clickService: ClickService) {}

  ngOnInit() {}

  add(): void {
    this.click += 1;
    this.clickService.addClicks();
  }
}
