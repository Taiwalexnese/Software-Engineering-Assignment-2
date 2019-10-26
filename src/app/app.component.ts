import { Component } from '@angular/core';
import { NewsApiServiceService } from './news-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
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

}
