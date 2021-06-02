import { Component, OnInit } from '@angular/core';
import { Pais } from './../interfaces/pais';
import { Formato } from './../interfaces/formato';
import {PaisService} from './../services/pais.service';
import {FormatoService} from './../services/formato.service';
// import { SELECT_ITEM_HEIGHT_EM } from '@angular/material/select';
import {FormControl} from '@angular/forms';
import { TiendaService } from '../services/tienda.service';
import { Tienda } from '../interfaces/tienda';



interface NombrePaises {
  id: number,
  name: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [PaisService,FormatoService,TiendaService]
})
export class FormComponent implements OnInit {

  favoriteCountry: string;
  paisSeleccionado: any;
  //nombrepais: string;
  formatoSeleccionado: string;
  formatosElejidos: any;
  tiendasElejidas: any;
  formato = new FormControl();
  tienda = new FormControl();

  nombrepais = 'Colombia';
  // labelPosition: 'betiendafore' | 'after' = 'after';
  
  public seleccionepais : Pais = {IdPais: 0, Descripcion: '' };
  public paises : Pais[];
  public formatos : Formato[];
  public tiendas : Tienda[];
  public labelPosition: 'after';
  
  
  tiendasf: string[] = ['Outlet', 'Tiendas Leonisa', 'Duty Free', 'Zebra', 'Concesion', 'Tienda Basica'];
  countries: string[] = ['Colombia', 'Costa Rica', 'Ecuador', 'Guatemala','Mexico', 'Puerto Rico'];
  
  paisNombres: NombrePaises[] = [
    {id: 1, name: 'Colombia'},
    {id: 2, name: 'Costa Rica'},
    {id: 3, name: 'Ecuador'},
    {id: 4, name: 'Guatemala'},
    {id: 5, name: 'Mexico'},
    {id: 5, name: 'Puerto Rico'},
    

  ];

  constructor(private paisSvc:PaisService,
    private formatoSvc:FormatoService,
    private tiendaSvc:TiendaService) { 

    }

  async ngOnInit() {

    
   // this.nombrepais="Colombia";
    
    
    // console.log(this.paisSvc.getPaises());
  

   // this.paises = this.paisSvc.getPaises();

       // this.paisSvc.getPaises1();
  debugger;
      const resultado  = await this.paisSvc.getPaises1();
      
      // const json = JSON.stringify(resultado);
      // console.log("Resultado json");
      // console.log(json);

    const datos: Pais[] = JSON.parse(resultado).Table1;
   console.log("Resultado datos");
   console.log(datos);
   this.paises = datos;

   const resultadoF  = await this.formatoSvc.getFormatos();
      
      
    const datosF: Formato[] = JSON.parse(resultadoF).Table1;
   console.log("Resultado Formatos");
   console.log(datosF);
   this.formatos = datosF;

   //const resultadoT  = await this.tiendaSvc.getTiendas(this.paisSeleccionado);


   this.paisSeleccionado= 169;


  }
  onSelect(id:any):void {
    console.log('ID->',id);
    // this.cities = this.dataSvc.getcities().filter(item => item.countryID = id);

  }

  onChange(id:any):void{
    console.log('IDM->',id);

  }
  async verTiendas(){

    
    alert(this.formatosElejidos[0].Descripcion)
    alert(this.formatosElejidos[0].IdFormato)
    //alert(this.formatosElejidos[1].IdFormato)
  //   debugger;

  //   const formatos = [];

  //   this.formatosElejidos.forEach(element => {
  //       formatos.push({"formato": element.IdFormato});
  //   }); 

  //   const paisFormatos ={"pais": this.paisSeleccionado,"formatos": formatos}
  //   console.log('Formato JSON->',formatos);
  //   console.log('Body JSON->',paisFormatos);

  //   const resultadoT  = await this.tiendaSvc.getTiendas(paisFormatos);

  //   const datosT: Tienda[] = JSON.parse(resultadoT).Table1;
  //  console.log("Resultado Tiendas");
  //  console.log(datosT);
  //  this.tiendas = datosT;
    
  }

  async seleccionaFormato(item: any){
    //   debugger;
    const formatos = [];

    this.formatosElejidos.forEach(element => {
        formatos.push({"formato": element.IdFormato});
    }); 

    const paisFormatos ={"pais": this.paisSeleccionado,"formatos": formatos}
    console.log('Formato JSON->',formatos);
    console.log('Body JSON->',paisFormatos);

    const resultadoT  = await this.tiendaSvc.getTiendas(paisFormatos);

    const datosT: Tienda[] = JSON.parse(resultadoT).Table1;
   console.log("Resultado Tiendas");
   console.log(datosT);
   this.tiendas = datosT;

  }


  async seleccionaTienda(item: any){
    //   debugger;
    const tiendas = [];
    console.log('Tienda Elejida->', this.tiendasElejidas);

    this.tiendasElejidas.forEach(element => {
      tiendas.push({"tienda": element.idAlmacen});
      //console.log('Tienda JSON->', element.idAlmacen);
    }); 
    console.log('Tienda JSON->',tiendas);


  //   const paisFormatos ={"pais": this.paisSeleccionado,"formatos": formatos}
  //   console.log('Formato JSON->',formatos);
  //   console.log('Body JSON->',paisFormatos);

  //   const resultadoT  = await this.tiendaSvc.getTiendas(paisFormatos);

  //   const datosT: Tienda[] = JSON.parse(resultadoT).Table1;
  //  console.log("Resultado Tiendas");
  //  console.log(datosT);
  //  this.tiendas = datosT;

  }
  

}
