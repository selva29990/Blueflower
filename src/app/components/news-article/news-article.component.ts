import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  @Input()
  article;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  readFullNews(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
