import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaPaises: string[] = ['Colombia', 'Costa Rica', 'Ecuador', 'Guatemala','Mexico', 'Puerto Rico'];

  constructor(
    private taskService: TaskService)
    {}
    getAllTasks() {
      this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
    }
    getTask() {
      this.taskService.getTask('2')
      .subscribe(tasks => {
        console.log(tasks);
      });
    }
  
  ngOnInit(): void {
  }

}
