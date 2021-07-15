import { Component , OnInit } from "@angular/core";
// import { UsersService } from "../users/users.service";
import { HomeComponent } from '../home/home.component';
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  login() {

   // this.navCtrl.setRoot(HomeComponent);
   
     console.log(this.email);
    console.log(this.password);
  }

  // constructor(public userService: UsersService, public router: Router) {}

  // login() {
  //   const user = { email: this.email, password: this.password };
  //   this.userService.login(user).subscribe(
  //     data => {
  //       this.userService.setToken(data.token);
  //       this.router.navigateByUrl("/");
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
