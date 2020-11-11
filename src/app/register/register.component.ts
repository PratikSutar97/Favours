import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public fobj:FormBuilder,
    private service:RequestService,
    public router:Router
  ) { }
  error='';
  userform = this.fobj.group(
    {
        name:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        email:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        password:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        mobile:['',[Validators.required,Validators.pattern(('[0-9 ]*'))]],
    }
  );
  ngOnInit(): void {
  }
  signup(){
    this.error=" "      
      this.service.signup(this.userform.value)
      .subscribe(
        data=>{console.log("Success",data) ;this.router.url["http://localhost:4200/viewPublic"]},
        error=>alert("This email id/mobile number is already Registered")
      );
      alert("Successfully Signed Up")

  }
}
