import {Component, Input, OnInit} from '@angular/core';
import {WeatherModel} from "../models/weather.model";

@Component({
  selector: 'app-weather-forecast-history-card',
  templateUrl: './weather-forecast-history-card.component.html',
  styleUrls: ['./weather-forecast-history-card.component.css']
})
export class WeatherForecastHistoryCardComponent implements OnInit {

  link: string;
  @Input() weatherForecast: WeatherModel;

  constructor() {
  }

  ngOnInit() {
    this.link = 'http://openweathermap.org/img/wn/' + this.weatherForecast.weatherConditionIcon + '@2x.png';
  }

}
