import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  news: any;

  newsCatagory = [
    'general',
    'entertainment',
    'health',
    'science'
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log(this.newsCatagory[0]);
    this.selectedCatagory(this.newsCatagory[0]);
  }

  selectedCatagory(category) {
    this.news = this.newsService.getData(`everything?q=${category.toLowerCase()}`);
   }

}
