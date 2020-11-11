import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public isLoggedIn:boolean= false;
  currentTheme = '';
  expandSubmenu: boolean = true;
  activeRequests;
    constructor(
      public dialog:MatDialog,
    ){
      this.activeRequests=localStorage.getItem('activeRequests');
      this.username=localStorage.getItem('username');
      if(localStorage.getItem('username')==null)
      {
        this.isLoggedIn=false;
        localStorage.setItem('loggedIn',"false");
      }
      else{
        this.isLoggedIn=true;
        this.username=localStorage.getItem('username');
      }
    }
  username;
  password;

  
  ngOnInit() {
    this.currentTheme = localStorage.getItem('theme');
  }
  
  f(val,val2){
    this.isLoggedIn=val;
    localStorage.setItem('username',val2);
      localStorage.setItem('loggedIn',val);
  }

  logout(){
    this.isLoggedIn=false;
    localStorage.removeItem('username');
  }
  
}
