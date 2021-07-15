import { Component } from '@angular/core';
import { TaskService } from './services/task.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public dataRows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ];
  // public dataColumns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];


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

