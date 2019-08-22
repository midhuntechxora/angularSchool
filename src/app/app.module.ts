import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherDetailListComponent } from './teacher-detail-list/teacher-detail-list.component';
import { TeacherDetailService } from './shared/teacher-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDetailsComponent,
    TeacherDetailComponent,
    TeacherDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TeacherDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
