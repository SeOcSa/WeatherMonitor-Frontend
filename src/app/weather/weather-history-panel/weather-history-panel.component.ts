import {Component, Input, OnInit} from '@angular/core';
import {WeatherModel} from "../models/weather.model";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather-history-panel',
  templateUrl: './weather-history-panel.component.html',
  styleUrls: ['./weather-history-panel.component.css']
})
export class WeatherHistoryPanelComponent implements OnInit {

  weatherHistory: WeatherModel[] = [];

  constructor(private weatherService: WeatherService) {
  }

  async ngOnInit() {
    await this.weatherService.getWeatherForecastHistory().then(result => {
      result.map(x => this.weatherHistory.push(x))
    }).catch(error => {
      console.log(error);
    });
  }
}
