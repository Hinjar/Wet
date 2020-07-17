import {NgModule} from "@angular/core";
import {CardsListComponent} from "./cards-list.component";
import {CoreModule} from "../adding/core/core.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
 declarations: [
   CardsListComponent,

 ] ,
  exports: [
    CardsListComponent,
    [RouterModule]
  ],
  imports: [
    CoreModule,
    RouterModule.forChild([
      {path: '', component: CardsListComponent}
    ]),
    CommonModule
  ]
})

export class CardsListModule {

}
