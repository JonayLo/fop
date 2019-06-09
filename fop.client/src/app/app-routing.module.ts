import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UserAlreadyLoggedGuard} from './guards/user-already-logged.guard';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [UserAlreadyLoggedGuard]},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'selected-beach', loadChildren: './selected-beach/selected-beach.module#SelectedBeachPageModule'},
    {path: 'clean-finish', loadChildren: './clean-finish/clean-finish.module#CleanFinishPageModule'},
    {path: 'my-cleaning-events', loadChildren: './my-cleaning-events/my-cleaning-events.module#MyCleaningEventsPageModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
