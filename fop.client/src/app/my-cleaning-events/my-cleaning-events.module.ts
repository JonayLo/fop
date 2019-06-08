import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyCleaningEventsPage } from './my-cleaning-events.page';

const routes: Routes = [
  {
    path: '',
    component: MyCleaningEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyCleaningEventsPage]
})
export class MyCleaningEventsPageModule {}
