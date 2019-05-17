import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Course} from './course';

@Injectable()
export class CourseService {
  private baseurl:string = "http://ngv281.000webhostapp.com/";
  private courseList: Course[];
  constructor(private http: Http) {

   }
   public getList(): Observable<Course[]> {
   let url = this.baseurl + "course/list.php";
   let body = "";
   let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
   let callUrl: string = url + "?" + body;
   console.log("calling: " + callUrl);
   return this.http.post(url, body, header)
     .map((res: Response) => {
        return this.parseData(res);
     })
     .catch((error: any) => {
       if (error.status == 404){
         console.log ("code note exist" );
         return Observable.of([]);
       }else{
         console.log("throw error" + JSON.stringify(error));
         return Observable.throw(error);
       }
     })
 }

 private parseData(res: Response): Course[] {
   let data = res.json();
   if (data.message != "Success") {
     console.log("error: " + data.Message);
     return [];
   } else {
     let arr:Course[] =[];
     for (let dbCourse of data.data){
       let c:Course = new Course(dbCourse.memID, dbCourse.uname ,dbCourse.name,dbCourse.route);
       
       arr.push(c);
     }
     return arr;
   }
 }
   public addCourse (id:number, current:string,next:string,status:string):Observable<boolean>{
     let url = this.baseurl+"course/updateLoc.php";
     let body = "&cId="+id+"&currentLoc="+current+"&nextLoc="+next+"&status="+status;
     let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
     let callUrl: string = url + "?" + body;
     console.log("add couse calling: " + callUrl);
     return this.http.post(url, body, header)
     .map((res: Response) => {
        let data = res.json();
        if (data.message == "Success"){
          console.log("add success");
          return true;
        }else{
           console.log("add fail");
           return false;
        }
     })
     .catch((error: any) => {
         console.log("throw error" + JSON.stringify(error));
         return Observable.throw(error);     
     })  
  }
  public changeStatus (id:number,status:number):Observable<boolean>{
    let url = this.baseurl+"course/goOnline.php";
    let body = "&cId="+id+"&status="+status;
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    let callUrl: string = url + "?" + body;
    console.log("add couse calling: " + callUrl);
    return this.http.post(url, body, header)
    .map((res: Response) => {
       let data = res.json();
       if (data.message == "Success"){
         console.log("add success");
         return true;
       }else{
          console.log("add fail");
          return false;
       }
    })
    .catch((error: any) => {
        console.log("throw error" + JSON.stringify(error));
        return Observable.throw(error);     
    })  
 }
 public deleteMember (id:number):Observable<boolean>{
  let url = this.baseurl+"course/deleteMem.php";
  let body = "&cId="+id;
  let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  let callUrl: string = url + "?" + body;
  console.log("add couse calling: " + callUrl);
  return this.http.post(url, body, header)
  .map((res: Response) => {
     let data = res.json();
     if (data.message == "Success"){
       console.log("del success");
       return true;
     }else{
        console.log("del fail");
        return false;
     }
  })
  .catch((error: any) => {
      console.log("throw error" + JSON.stringify(error));
      return Observable.throw(error);     
  })  
}
}
