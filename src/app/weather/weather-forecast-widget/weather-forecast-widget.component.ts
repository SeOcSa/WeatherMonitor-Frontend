import {Component, Input, OnInit} from '@angular/core';
import {WeatherModel} from "../models/weather.model";

@Component({
  selector: 'app-weather-forecast-widget',
  templateUrl: './weather-forecast-widget.component.html',
  styleUrls: ['./weather-forecast-widget.component.css']
})
export class WeatherForecastWidgetComponent implements OnInit {

  @Input() weatherDetails: WeatherModel;
  @Input() link : string;
  constructor() { }

  ngOnInit() {
  }



}
