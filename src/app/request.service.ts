import { Injectable } from '@angular/core';

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      import { HttpClient } from '@angular/common/http'; 
import {RequestDetails} from './request-details';
import {UserDetails} from './user-details';
import { LoginDetails } from './LoginDetails';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _requestsUrl = "http://localhost:3000/api/viewRequests";
  private _addRequestsUrl = "http://localhost:3000/api/addRequests";
  private _signUpUrl = "http://localhost:3000/api/signup";
  private _loginUpUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient) { }

  
  viewRequests() {
    return this.http.get<any>(this._requestsUrl)
  }
  
  addRequest(requestDetails:RequestDetails){
    return this.http.post<RequestDetails[]>(this._addRequestsUrl,requestDetails);
  }

  signup(userDetails:UserDetails){
    return this.http.post<UserDetails[]>(this._signUpUrl,userDetails);
  }

  login(loginDetails:LoginDetails){
    return this.http.post<LoginDetails>(this._loginUpUrl,loginDetails)
  }
}
