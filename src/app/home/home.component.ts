import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count:number=0;
  c:string="";
  txt:string="";
  tt:string="ลองกดปุ่มนี้ 10 ครั้ง";
  disable:boolean = false;
  constructor() { }

  clicked(){
    this.count++;
    if(this.count == 10 ){
      this.txt = "??"
      this.tt="กดอีก10ครั้ง";
    }
    if(this.count == 20 ){
      this.txt = "???? "
      this.tt="อีก10ครั้งละกัน";
    }
    if(this.count == 30 ){
     this.txt = "wattana 224 กาก "
      this.tt="พอ";
    }
    if(this.count == 32 ){
     
      this.tt="กูบอกให้ พอ!!!";
    }
    if(this.count == 40 ){
      this.tt="KUY!";
    }
    if(this.count == 42 ){
      this.tt="กูบล๊อคละ!!";
      this.disable=true;      
    }
    
  
    this.c=this.count.toString();
  }
  ngOnInit() {
  }

}
