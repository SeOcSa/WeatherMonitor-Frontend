import {Component, OnInit} from '@angular/core';
import {WeatherModel} from "../models/weather.model";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  weatherForecast: WeatherModel = {
    cityName: 'Default',
    country: 'Default',
    weatherCondition: 'Default',
    weatherConditionDetails: 'Default',
    weatherConditionIcon: 'Default',
    humidity: 'Default',
    pressure: 'Default',
    temperature: '0',
    windSpeed: 'Default',
    day: 'Default',
    month: 'Default',
    year: 'Default',
    time: 'Default',
    sunrise: 'Default',
    sunset: 'Default',
  };

  link: string;

  constructor(private weatherService: WeatherService) {
  }

  async ngOnInit() {

    await this.weatherService.getLastWeatherForecastHistory().then(result => this.weatherForecast = result).catch((error) => console.log(error));
    this.link = 'http://openweathermap.org/img/wn/' + this.weatherForecast.weatherConditionIcon + '@2x.png';
  }

  onSearch(weatherForecast: WeatherModel) {
    this.weatherForecast = weatherForecast;
    const defineLinkIcon = this.weatherForecast.weatherConditionIcon === 'Default' ? '02d' : this.weatherForecast.weatherConditionIcon;
    this.link = 'http://openweathermap.org/img/wn/' + defineLinkIcon + '@2x.png';
  }

}
