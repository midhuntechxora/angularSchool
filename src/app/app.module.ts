import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherDetailsListComponent } from './teacher-details-list/teacher-details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDetailsComponent,
    TeacherDetailsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
