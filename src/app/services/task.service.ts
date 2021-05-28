import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http:HttpClient )
     { }
     getAllTasks() {
      const path = `${this.api}/todos`;
      // const path = 'https://jsonplaceholder.typicode.com/todos';
      return this.http.get<Task[]>(path);
    }
    getTask(id: string) {

      // const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
      const path = `${this.api}/todos/${id}`;
      return this.http.get<Task>(path);
    }

}
