import { Component } from '@angular/core';
import { NewsApiServiceService } from '../news-api-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {


  query;
  resultsList;
  constructor(private newsapiservice: NewsApiServiceService) { }

  searchNow(): void {
    console.log(this.query);
    this.newsapiservice.getNews(this.query).subscribe(res => {
      this.resultsList = res['results'];
      console.log(this.resultsList);
    }, (error) => {
      console.log(error);
    });
  }

  fetchRestaurant(article: any) {
    this.newsapiservice.setRestaurant(article);
  }
}