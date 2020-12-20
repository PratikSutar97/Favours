import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddRequestComponent } from './add-request/add-request.component';
import { AddFavourComponent } from './add-favour/add-favour.component';
import { ReturnFavourComponent } from './return-favour/return-favour.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberFavoursComponent } from './member-favours/member-favours.component';

const routes: Routes = [
  { path: 'viewPublic', component: ViewRequestComponent },
  { path: 'addRequest', component: AddRequestComponent },
  { path: 'addFavour', component: AddFavourComponent },
  { path: "memberFavour", component:MemberFavoursComponent},
  { path: 'returnFavour', component: ReturnFavourComponent },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: 'viewPublic', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
