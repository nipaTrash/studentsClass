import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentsClassModule } from './students-class/students-class.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentsClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
