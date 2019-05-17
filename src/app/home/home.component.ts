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
  tt:string="Click ME!!!";
  disable:boolean = false;
  constructor() { }

  clicked(){
    this.count++;

    if(this.count == 10 ){
      this.txt = "👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻"
      this.tt="";
      this.disable = true;
    }
  
    this.c=this.count.toString();
  }
  ngOnInit() {
  }

}
