import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeadlinesPage } from './headlines.page';
import { ComponetModule } from '../components/component.module';
 
const routes: Routes = [
  {
    path: '',
    component: HeadlinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponetModule
  ],
  declarations: [HeadlinesPage]
})
export class HeadlinesPageModule {}
