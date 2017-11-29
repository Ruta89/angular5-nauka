import { LogService } from './services/log.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Kliklacz1Component } from './kliklacz1/kliklacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';

@NgModule({
  declarations: [AppComponent, Kliklacz1Component, Klikacz2Component],
  imports: [BrowserModule, FormsModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
