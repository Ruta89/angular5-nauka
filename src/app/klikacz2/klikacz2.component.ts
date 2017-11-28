import { ClickService } from '../services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css'],
  providers: [ClickService]
})
export class Klikacz2Component implements OnInit {
  click = 0;
  constructor(private clickService: ClickService) {}

  ngOnInit() {}

  add(): void {
    this.click += 1;
    this.clickService.addClicks();
  }
}
