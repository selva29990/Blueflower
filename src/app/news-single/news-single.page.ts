import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  data: any;
  constructor(private newsService: NewsService, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.data = this.newsService.currentArticle;
  }

  openBrowser() {
    console.log(this.data.url);
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };
    const browser = this.inAppBrowser.create(this.data.url, '_self', options);
  }

}
