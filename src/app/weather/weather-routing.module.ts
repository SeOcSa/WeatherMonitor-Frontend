import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WeatherPanelComponent} from "./weather-panel/weather-panel.component";


const routes: Routes = [
  {path: '', component: WeatherPanelComponent},
  {path: '/weather', component: WeatherPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {
}
