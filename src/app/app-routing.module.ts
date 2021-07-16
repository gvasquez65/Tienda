import { AuthGuard } from './guards/auth.guard';
import { FormComponent } from './form/form.component';
// import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' } ,
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent, pathMatch: "full"},
   { path: 'form', component: FormComponent, data: { title: 'Form' },canActivate:[AuthGuard]},
  { path: "register", component: RegisterComponent,canActivate:[AuthGuard]}, 
  { path: "**", component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 