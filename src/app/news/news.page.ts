import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.readHeadLines();
  }

  readHeadLines(){
    this.news = this.newsService.getData(`top-headlines?country=us`);
  }

}
