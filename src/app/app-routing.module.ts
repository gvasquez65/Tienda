import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DropComponent } from './drop/drop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'drop', component: DropComponent, data: { title: 'Paises' } },
  { path: 'list', component: ListComponent, data: { title: 'List' } },
  { path: 'form', component: FormComponent, data: { title: 'Form' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
