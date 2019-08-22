import { Component, OnInit } from '@angular/core';
import { TeacherDetailService } from '../shared/teacher-detail.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  constructor(private service:TeacherDetailService) { }

  ngOnInit() {
  }

}
