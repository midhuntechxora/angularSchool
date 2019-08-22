import { Injectable } from '@angular/core';
import { TeacherDetail } from './teacher-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherDetailService {
  formData:TeacherDetail;
  constructor() { }
}
