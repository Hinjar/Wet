import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddingModule} from "./adding/adding.module";
import {CoreModule} from "./adding/core/core.module";
import { AboutComponent } from './about/about.component';
import {HeaderComponent} from "./header/header.component";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
