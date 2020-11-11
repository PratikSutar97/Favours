import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RequestDetails} from '../request-details';
import {RequestService} from '../request.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  constructor(
    private router: Router,
    public fobj:FormBuilder,
    private requestService:RequestService
  ) { 
    this.isloggedinn=localStorage.getItem('loggedIn');
    if(this.isloggedinn=="false")
      this.isloggedin = false;
    else{
      this.isloggedin = true;
    }
  }
    isloggedinn;
    isloggedin=false;;
  AddRequestData=new RequestDetails("","","","");
  ngOnInit(): void { }
  userform = this.fobj.group(
    {
        name:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        title:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        desc:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
        reward:['',[Validators.required,Validators.pattern(('[a-zA-Z0-9 ]*'))]],
    }
  );
  error="";
  addRequest() {
      if(this.isloggedin==true){
        var name=localStorage.getItem('username')
        var username = name.replace(/@.*$/,"");
        this.userform.value.name=username;
      }
      this.requestService.addRequest(this.userform.value)
      .subscribe(
        data=>console.log("Success",data),
        error=>console.log("ERRORRR !!!",error)
      )
      this.router.navigate(['./viewPublic']);
  }
}
