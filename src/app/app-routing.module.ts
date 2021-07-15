import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  // { path: '', component: HomeComponent, data: { title: 'Home' } },
  // { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: "", component: AppComponent, pathMatch: "full" },
  // { path: '', component: RegisterComponent, pathMatch: "full"} ,
  // { path: '', pathMatch: 'full', redirectTo: 'login' } ,
  { path: "login", component: LoginComponent, pathMatch: "full" },
   { path: 'form', component: FormComponent, data: { title: 'Form' } },
  { path: "register", component: RegisterComponent, pathMatch: "full"} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 // para el LOGIN
// const appRoutes = [
//   { path: "", component: AppComponent, pathMatch: "full" },
//   { path: "login", component: LoginComponent, pathMatch: "full" },
//   { path: "register", component: RegisterComponent, pathMatch: "full" }
// ];
// export const routing = RouterModule.forRoot(appRoutes);