import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
    declarations: [NewsArticlesComponent, NewsArticleComponent, SkeletonComponent],
    exports: [NewsArticlesComponent, NewsArticleComponent, SkeletonComponent],
    imports: [CommonModule, IonicModule]
  })

export class ComponetModule {}