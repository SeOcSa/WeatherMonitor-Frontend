import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WeatherModule} from "./weather/weather.module";
import { NavPanelComponent } from './core/nav-panel/nav-panel.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
