import { Component, OnInit } from '@angular/core';
import { CourseService} from '../course.service';
import { Router } from "@angular/router";

import * as $ from 'jquery';
@Component({
  selector: 'app-add-course',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdateStatusComponent implements OnInit {
  
  cId:number;
  currentLoc:string = "";
  nextLoc:string = "";
  status:string = "";
  count:number = 0;
  Start:boolean = false;
  Onlinestate:number;
  text:string="Start Drive";

  btndisable1:boolean = false;
  btndisable2:boolean = false;
  btndisable3:boolean = false;

  constructor(private courseService:CourseService,private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $("#btn1").click(function(){
        alert('button click');
      })
    })
  }
  
  location1(){
    this.currentLoc = "หอพัก";
    this.nextLoc = "ตึกสังคมศาสตร์";
    this.saveCourse();
  }
  location2(){
    this.currentLoc = "ตึกสังคมศาสตร์";
    this.nextLoc = "ห้องสมุด";
    this.saveCourse();
  }
  location3(){
    this.currentLoc = "ห้องสมุด";
    this.nextLoc = "ตึกคณะวิทย์";
    this.saveCourse();
  }
  location4(){
    this.currentLoc = "ตึกคณะวิทย์";
    this.nextLoc = "ยิมสเตเดียม";
    this.saveCourse();
  }
  location5(){
    this.currentLoc = "ยิมสเตเดียม";
    this.nextLoc = "ศูนย์อาหาร";
    this.saveCourse();
  }
  location6(){
    this.currentLoc = "ศูนย์อาหาร";
    this.nextLoc = "-";
    this.saveCourse();
  }
   //----------Route2----------
   location7(){
    this.currentLoc = "หอพัก";
    this.nextLoc = "โรงอาหาร";
    this.saveCourse();
  }
  location8(){
    this.currentLoc = "โรงอาหาร";
    this.nextLoc = "ตึกคณะแพทย์";
    this.saveCourse();
  }
  location9(){
    this.currentLoc = "ตึกคณะแพทย์";
    this.nextLoc = "ศูนย์หนังสือ";
    this.saveCourse();
  }
  location10(){
    this.currentLoc = "ศูนย์หนังสือ";
    this.nextLoc = "ตึกสถาปัตย์";
    this.saveCourse();
  }
  location11(){
    this.currentLoc = "ตึกสถาปัตย์";
    this.nextLoc = "-";
    this.saveCourse();
  }
   //----------Route3----------
   location12(){
    this.currentLoc = "ท่ารถ";
    this.nextLoc = "โรงอาหาร";
    this.saveCourse();
  }
  location13(){
    this.currentLoc = "โรงอาหาร";
    this.nextLoc = "สำนักทะเบียน";
    this.saveCourse();
  }
  location14(){
    this.currentLoc = "สำนักทะเบียน";
    this.nextLoc = "ตึกคณะเศรษฐศาสตร์";
    this.saveCourse();
  }
  location15(){
    this.currentLoc = "ตึกคณะเศรษฐศาสตร์";
    this.nextLoc = "หอพัก";
    this.saveCourse();
  }
  location16(){
    this.currentLoc = "หอพัก";
    this.nextLoc = "-";
    this.saveCourse();
  }
  location17(){
    this.currentLoc = "ศูนย์อาหาร";
    this.nextLoc = "-";
    this.saveCourse();
  }
  empty(){
    this.status ="ว่าง";
    this.saveCourse();
  }
  more(){
    this.status ="ว่างอยู่";
    this.saveCourse();
  }
  full(){
    this.status ="เต็ม";
    this.saveCourse();
  }
  start(){
    if(this.count%2==0){
      if(this.cId>=1000&&this.cId<2000){
        this.btndisable2=true;
        this.btndisable3=true;
      }
      if(this.cId>=2000&&this.cId<3000){
        this.btndisable1=true;
        this.btndisable3=true;
      }
      if(this.cId>=3000&&this.cId<4000){
        this.btndisable2=true;
        this.btndisable1=true;
      }
      

      this.Start = true;
      this.text="Stop Drive";
      this.Onlinestate=1;
      this.driverStatus();
    }else{
      if(this.cId>=1000&&this.cId<2000){
        this.btndisable2=false;
        this.btndisable3=false;
      }
      if(this.cId>=2000&&this.cId<3000){
        this.btndisable1=false;
        this.btndisable3=false;
      }
      if(this.cId>=3000&&this.cId<4000){
        this.btndisable2=false;
        this.btndisable1=false;
      }


      this.Start = false;
      this.text="Start Drive";
      this.Onlinestate=0;
      this.driverStatus();
    }
      console.log(this.count);
    this.count++;
    console.log(""+this.Start);
  }
  saveCourse(){
    console.log("going to save course");
    this.courseService.addCourse(this.cId,this.currentLoc,this.nextLoc,this.status).subscribe(
      result => {
        if (result){
          this.router.navigate(["/add"]);
        }else{
          alert ("Error submitting the data");
        }
      }
    );
  }
  driverStatus(){
    console.log("going to Online/Offline");
    this.courseService.changeStatus(this.cId,this.Onlinestate).subscribe(
      result => {
        if (result){
          this.router.navigate(["/add"]);
        }else{
          alert ("Error submitting the data");
        }
      }
    );
  }

}
