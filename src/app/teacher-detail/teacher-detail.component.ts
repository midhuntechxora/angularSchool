import { Component, OnInit } from '@angular/core';
import { TeacherDetailService } from '../shared/teacher-detail.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  constructor(private service:TeacherDetailService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id:0,
      Name:'',
      HashName:''
    }
  }
  onSubmit(form: NgForm){
    this.service.postTeacherDetail(form.value).subscribe(
      res => {
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    );
  }

}
