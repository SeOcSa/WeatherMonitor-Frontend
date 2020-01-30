import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import {WeatherService} from "../services/weather.service";
import {WeatherModel} from "../models/weather.model";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  //TODO: use googleMaps places
  cityName: string;
  weatherModel: WeatherModel;
  // @ViewChild('search', null)
  // public searchElementRef: ElementRef;

  constructor(private ngZone: NgZone, private mapsAPILoader: MapsAPILoader, private weatherService: WeatherService) {
  }

  ngOnInit() {
    // this.getPlaceAutocomplete();
  }

  public async onClickHandler() {
    await this.weatherService.getWeatherForCity(this.cityName).then(result => this.weatherModel = result).catch((error) => {
      console.log(error)
    });

    console.log(this.weatherModel);
  }

  public onTypeHandler(event) {
    const cityName = event.target.value;
    this.cityName = cityName;
  }

  // private getPlaceAutocomplete() {
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["address"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //
  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //
  //         //set latitude, longitude and zoom
  //         this.cityName = place.name;
  //       });
  //     })
  //   });
  // }
}
