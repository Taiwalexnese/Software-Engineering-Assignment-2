import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiServiceService } from '../news-api-service.service';

@Component({
  selector: 'app-param-component',
  templateUrl: './param-component.component.html',
  styleUrls: ['./param-component.component.css']
})
export class ParamComponentComponent implements OnInit {
  // id;
  article: any;

  constructor(private route: ActivatedRoute, private serviceapi: NewsApiServiceService) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get("id")
    this.article = this.serviceapi.restaurantProfile;
    console.log(this.article.name);
  }

}
