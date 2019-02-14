import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  sources: any;
  term = '';
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getSourcesData();
  }

  getSourcesData(){
    this.newsService.getData(`sources`).subscribe(sources => {
      this.sources = sources['sources'];
    });
  }
}
