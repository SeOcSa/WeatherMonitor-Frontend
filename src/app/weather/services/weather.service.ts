import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {WeatherModel} from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  private getApiUrl() {
    return environment.apiUrl;
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private fetchWeather(city: string) {
    const url = `${this.getApiUrl()}weather/Get/` + city;
    return this.http.get(url).pipe(catchError(this.handleError)) as Observable<WeatherModel>;
  }

  public getWeatherForCity(city: string) {
    return this.fetchWeather(city).toPromise();
  }
}
