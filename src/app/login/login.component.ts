import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RequestService } from '../request.service';
import { LoginDetails } from '../LoginDetails';
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';
import { url } from 'inspector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public fobj:FormBuilder,
    public dialog:MatDialog,
    private service:RequestService,
    public router:Router,
    public app:AppComponent
  ) { }

  ngOnInit(): void {}
  error:number;
  error_msg=""
  loggedIn=true;
  username;
  password;
  data=[];
  userform = this.fobj.group(
    {   
        email:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        password:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
    }
  );
  f(){
    return this.userform.value.email;
  }
  openRegisterComponent(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '450px',
      height:'500px',
      data: {name: this.username, animal: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  login(){
    this.service.login(this.userform.value)
    .subscribe(
      data=>{
        console.log("Data - :- "+data)
      },
      err=>{
        this.error=err.status;
        this.error_msg="Invalid Email or Password !! Try Again";
      }
    )
    if(this.error!=401){
      this.loggedIn=false; 
    }
    else{
      this.loggedIn=true;
    }
    if(this.loggedIn==true){
      this.app.f(this.loggedIn,this.userform.value.email)
      this.router.navigate(['/viewPublic'])
    } 
  }
}
