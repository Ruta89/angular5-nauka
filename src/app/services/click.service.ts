import { Injectable } from '@angular/core';

@Injectable()
export class ClickService {
  sumClicks = 0;

  constructor() {}

  addClicks() {
    this.sumClicks += 1;
    console.log('Suma w servisie: ', this.sumClicks);
  }
}
