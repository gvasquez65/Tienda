import { Component, OnInit } from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})

export class DropComponent implements OnInit {
// export class SelectFormExample {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

constructor() { }

  ngOnInit(): void {
  }

 }


// interface NombrePaises {
//   id: number,
//   name: string
// }

// @Component({
//   selector: 'app-drop',
//   templateUrl: './drop.component.html',
//   styleUrls: ['./drop.component.scss']
// })
// export class DropComponent implements OnInit {

//   favoriteCountry: string;
//   listaPaises: string[] = ['Colombia', 'Costa Rica', 'Ecuador', 'Guatemala','Mexico', 'Puerto Rico'];
//   paisSeleccionado;
//   paisNombres: NombrePaises[] = [
//     {id: 1, name: 'Colombia'},
//     {id: 2, name: 'Costa Rica'},
//     {id: 3, name: 'Ecuador'},
//     {id: 4, name: 'Guatemala'},
//     {id: 5, name: 'Mexico'},
//     {id: 5, name: 'Puerto Rico'},
    

//   ];
