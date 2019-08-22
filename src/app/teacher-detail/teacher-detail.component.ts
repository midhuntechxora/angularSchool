import { Component, OnInit } from '@angular/core';
import { TeacherDetailService } from '../shared/teacher-detail.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  constructor(private service:TeacherDetailService,
    private toaster:ToastrService) { }

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
        this.resetForm(form);
        this.toaster.success('Submitted successfully','Teacher Detail Register');
      },
      err => {
        console.log(err);
      }
    );
  }

}
