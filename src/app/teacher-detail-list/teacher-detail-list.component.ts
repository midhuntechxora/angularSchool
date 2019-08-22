import { Component, OnInit } from '@angular/core';
import { TeacherDetailService } from '../shared/teacher-detail.service';

@Component({
  selector: 'app-teacher-detail-list',
  templateUrl: './teacher-detail-list.component.html',
  styleUrls: ['./teacher-detail-list.component.css']
})
export class TeacherDetailListComponent implements OnInit {

  constructor(private service:TeacherDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
