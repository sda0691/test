import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { Error404Component } from './error404/error404.component'

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'user',  component: UserComponent },
  { path: '**',  component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
