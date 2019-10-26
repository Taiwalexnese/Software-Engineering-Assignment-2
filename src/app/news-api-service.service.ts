import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  API_KEY: string = "e06f5b3da2be4501af757078cf03a985";

  restaurantProfile: any;
  constructor(private httpClient: HttpClient) { }
  public getNews(query: string) {
    const par = new HttpParams().append('input', query)
    console.log("sdfs" + par);
    return this.httpClient.get<Config>("http://localhost:3000/api/new?" + par);
  }

  public setRestaurant(restaurant: any) {
    console.log("service: " + restaurant.name);
    this.restaurantProfile = restaurant;
  }
}
export interface Config {
  heroesUrl: string;
  textfile: string;
}
