import { Injectable } from '@angular/core';
import { TeacherDetail } from './teacher-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherDetailService {
  formData:TeacherDetail;
  teachers : TeacherDetail[];
  readonly rootURL = 'https://localhost:5001/api';
  constructor(private http:HttpClient) { }
  postTeacherDetail(formData:TeacherDetail) {
    return this.http.post(this.rootURL+'/Teacher',formData);
  }
  refreshList(){
    this.http.get(this.rootURL+'/Teacher')
    .toPromise()
    .then(res => this.teachers = res as TeacherDetail[]);
  }
}
