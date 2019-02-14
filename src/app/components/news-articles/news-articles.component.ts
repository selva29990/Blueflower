import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent implements OnInit {

  @Input()
  news;
  fakeNews = new Array(20);
  constructor() { }

  ngOnInit() {
  }

}
