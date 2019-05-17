import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {CourseService} from './course.service';
import {UpdateStatusComponent } from './updatestatus/updatestatus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'


const routes: Routes = [ 
  { path: 'home', component: HomeComponent }, 
  {path : 'adminlogin', component: AdminloginComponent},
  {path : 'admin', component: AdminComponent},
  { path: 'add', component: UpdateStatusComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
 ]; 


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    UpdateStatusComponent,
    AdminComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
