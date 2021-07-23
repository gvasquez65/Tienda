
import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    links = [
    {
      name: "login",
      url: "login"
    },
    // {
    //   name: "Lista",
    //   url: "list"
    // },

    {
      name: "Formulario",
      url: "form"
    }
  ]
  title = 'PryInterfazTiendas';
  public isContentLoading = true;

  @Input()
  isDisabledList = true;
  nombre = 'DesarrolloWeb.com';


  constructor(
    private taskService: TaskService,
    private service: AuthService,
    private router: Router) { }
  ngOnInit(): void {

  }

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }
  loadContent(nom: string) {
    debugger;
    console.log(nom);

    if (nom = 'form') {
      this.isContentLoading = true;
    }
    else {
      this.isContentLoading = false;
    }
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }

}

