# AngularMaterialExample

Este proyecto es un ejemplo de la integración de la librería Angular Material con Angular. Se centra en la construcción de un tema básico con menú lateral y también algunos ejemplos de utilización de componentes.
- Angular 9.0.1
- Angular Material 9.0.0

## Instalación del proyecto

Ejecutar en consola:  git clone https://github.com/Digital-55/angular-material-example.git

Ir al directorio cd angular-material-example

Ejecutar en consola: npm install

Ejecutar en consola para arrancar el servidor y abrir automáticamente una pestaña en el navegador: ng serve --open

## Servicio Usando HttpClient para conectar a una REST API en Angular/Ionic

ng g service services/task
ng g interface interfaces/task
export interface Task {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task.model';
getAllTasks() {
  const path = 'https://jsonplaceholder.typicode.com/todos';
  return this.http.get<Task[]>(path);
}
import { TaskService } from './services/task.service';
getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(todos => {
    console.log(todos);
  });
}
<button (click)="getAllTasks()">getAllTasks()</button>
getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(todos => {
    console.log(todos);
  });
}
getTask(id: string) {
  const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
  return this.http.get<Task>(path);
}
getTask() {
  this.taskService.getTask('1')
  .subscribe(todo => {
    console.log(todo);
  });
}
<button (click)="getTask()">getTask()</button>
private api = 'https://jsonplaceholder.typicode.com';
updateTask(task: Task) {
  const path = `${this.api}/todos/${task.id}`;
  return this.http.put<Task>(path, task);
}
updateTask() {
  const task = {
    id: '1',
    userId: '1',
    title: 'change title',
    completed: true
  };
  this.taskService.updateTask(task)
  .subscribe(todo => {
    console.log(todo);
  });
}
<button (click)="updateTask()">updateTask()</button>
deleteTask(id: string) {
  const path = `${this.api}/todos/${id}`;
  return this.http.delete(path);
}
deleteTask() {
  this.taskService.deleteTask('1')
  .subscribe((data) => {
    console.log(data);
  });
}
<button (click)="deleteTask()">deleteTask()</button>
createTask(task: Task) {
  const path = `${this.api}/todos`;
  return this.http.post(path, task);
}
createTask() {
  const task = {
    id: '12',
    userId: '1',
    title: 'change title',
    completed: true
  };
  this.taskService.createTask(task)
  .subscribe((newTask) => {
    console.log(newTask);
  });
}
<button (click)="createTask()">createTask()</button>#   T i e n d a  
 #   T i e n d a  
 #   T i e n d a  
 