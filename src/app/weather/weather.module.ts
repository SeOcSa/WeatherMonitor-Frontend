import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";
import { WeatherHistoryPanelComponent } from './weather-history-panel/weather-history-panel.component';
import {
  WeatherForecastWidgetComponent,
} from './weather-forecast-widget/weather-forecast-widget.component';



@NgModule({
  declarations: [WeatherPanelComponent, WeatherSearchComponent, WeatherHistoryPanelComponent, WeatherForecastWidgetComponent],
    exports: [
        WeatherPanelComponent
    ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCj_leYN7pRCid58QtUgvUxgo9ks6_vSNg',
      libraries: ['places']
    })
  ]
})
export class WeatherModule {
  constructor(
    @Optional() @SkipSelf() parentModule: WeatherModule
  ) {
    if (parentModule) {
      throw new Error('WeatherModule is already loaded. Import only in AppModule');
    }
  }
}
