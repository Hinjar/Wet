import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AddingComponent} from "./adding/adding.component";
import {AboutComponent} from "./about/about.component";



const routes: Routes = [
  {path: '', loadChildren:() => import('./adding/adding.module').then(m => m.AddingModule) },
  {path: 'card', loadChildren:() => import('./cards-list/cards-list.module').then(m => m.CardsListModule) },
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
