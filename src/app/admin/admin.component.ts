import { Component, OnInit } from '@angular/core';
import { CourseService} from '../course.service';
import { Router } from "@angular/router";
import { Course} from './../course';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ID:number;
  
  tableList:Course[];

  constructor(private courseService:CourseService,private router: Router) {
    courseService.getList().subscribe(courses=> {
    if (courses != undefined){
      this.tableList = courses;
    }else{
      this.tableList = [];
    }
  }); }

  ngOnInit() {
  }

  delMember(){
    console.log(this.ID);
    this.courseService.deleteMember(this.ID);
    
  }
  Logout(){
    this.router.navigate(["/adminlogin"]);
  }
}
