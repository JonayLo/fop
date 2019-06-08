import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectedBeachPage } from './selected-beach.page';

const routes: Routes = [
  {
    path: ':beachId',
    component: SelectedBeachPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectedBeachPage]
})
export class SelectedBeachPageModule {}
