import {Component, OnInit} from '@angular/core';
import {WeatherModel} from "../models/weather.model";

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  weatherForecast: WeatherModel;
  link: string;
  constructor() { }

  ngOnInit() {

  }

  onSearch(weatherForecast : WeatherModel){
    this.weatherForecast = weatherForecast;
    this.link = 'http://openweathermap.org/img/wn/' + this.weatherForecast.weatherConditionIcon + '@2x.png';
  }

}
