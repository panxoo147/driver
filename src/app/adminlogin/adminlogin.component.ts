import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  ID:String;
  PASS:String;
  text:String="";
  hostID:String = "admin";
  hostPassword:String = "admin";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Login(){
    if (this.ID==this.hostID&&this.PASS==this.hostPassword) {
      this.router.navigate(["/admin"]);
    } else {
      this.router.navigate(["/adminlogin"]);
      this.text = "Invalid ID or Password";
    }
    
  }
}
