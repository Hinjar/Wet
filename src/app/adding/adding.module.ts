
import {NgModule} from "@angular/core";
import {AddingComponent} from "./adding.component";
import {CoreModule} from "./core/core.module";

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AddingComponent
  ],
  exports: [
    AddingComponent,
    [RouterModule]
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: AddingComponent}
    ]),

  ],
})
export class AddingModule {

}
