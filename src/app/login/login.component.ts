import { Component, OnInit, Input } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
import {Router, ActivatedRoute} from '@angular/router';
// import { AppComponent } from "../app.component";
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  public messageError: string;
  // @Input()
  // nombre = 'DesarrolloWeb.com';

  constructor(private router: Router, private activatedRouter: ActivatedRoute,private service:AuthService, private userService: UsersService,
    private dialog: MatDialog,) {}
  ngOnInit(): void {}

    login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
      this.service.setLogin('true');
     this.router.navigateByUrl('/form');

     
    },
     error => {
       debugger;
            this.service.setLogin('false');
            if (error.status === 400) {
              // some logic
               this.messageError = JSON.stringify(error.error);
              const dialogRef = this.dialog.open(AlertDialogComponent, {
                data: {
                  message: this.messageError,
                  buttonText: {
                    cancel: 'Aceptar'
                  }
                },
              });

              console.log('El error es',this.messageError);
              ;
           }
            console.log('Error es:',error);
            
           }
    );
    //eve.holt@reqres.in
    // console.log(this.email);
    // console.log(this.password);
  }
 
}
