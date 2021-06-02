import { Component } from '@angular/core';
import { TaskService } from './services/task.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    // {
    //   name: "Inicio",
    //   url: ""
    // },
    // {
    //   name: "Paises",
    //   url: "drop"
    // },
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
  
constructor(
  private taskService: TaskService)
  {}
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

}

