import { Component, OnInit, Input } from '@angular/core';
// import { UsersService } from "../users/users.service";
// import { HomeComponent } from '../home/home.component';
import {Router, ActivatedRoute} from '@angular/router';
// import { AppComponent } from "../app.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  
  // @Input()
  // nombre = 'DesarrolloWeb.com';

  constructor(private router: Router, private activatedRouter: ActivatedRoute,private service:AuthService) {}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  login() {
    this.service.setLogin('true');
    this.router.navigateByUrl('/form');
   
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
