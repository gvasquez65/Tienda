import { Component, OnInit } from '@angular/core';

export interface Language {
  name: string;
  created: number;
}

export interface Tiendas {
  id: string;
  name: string;
 }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  frameworks: string[] = ['Outlet', 'Tiendas Leonisa', 'Duty Free', 'Zebra', 'Concesion', 'Tienda Basica'];

  formatos: Tiendas[] = [
    {id: '1', name: 'Outlet'}, 
    {id: '2', name:'Tiendas Leonisa'},
    {id: '3', name:'Duty Free'}, 
    {id: '4', name:'Zebra'},
    {id: '5', name: 'Concesion'},
    {id: '6', name: 'Tienda Basica'},
  ];

  languages: Language[] = [
    {name: "Javascript", created: 1995},
    {name: "PHP", created: 1994},
    {name: "Java", created: 1995},
    {name: "Python", created: 1991},
    {name: "Dart", created: 2011},
    {name: "C#", created: 2000},
  ];

  dataTitle: string[] = ["name", "created"];

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
