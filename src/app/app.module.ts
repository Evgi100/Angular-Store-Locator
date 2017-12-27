import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import {AgmCoreModule} from '@agm/core';
import{StoresService} from './stores.service'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBGcyGU4ZX8p0K9Ba4qkRj9GDtvAhk_xxE',
      libraries:["places" ]
    })
  ],
  providers:[StoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
