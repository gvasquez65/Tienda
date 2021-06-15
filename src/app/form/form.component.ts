import { Component, OnInit, ViewChild } from '@angular/core';
import { Pais } from './../interfaces/pais';
import { Formato } from './../interfaces/formato';
import {PaisService} from './../services/pais.service';
import {FormatoService} from './../services/formato.service';
// import { SELECT_ITEM_HEIGHT_EM } from '@angular/material/select';
import {FormControl} from '@angular/forms';
import { TiendaService } from '../services/tienda.service';
import { Tienda } from '../interfaces/tienda';
// import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { saveAs } from 'file-saver';



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

  public columnDefs = [
    { field: 'orden' },
    { field: 'almacen' },
    { field: 'nitprov' },
    { field: 'precio' }
  ];

  public rowData = [
      { descripcion: 'ZEBRA', orden: '2', almacen: '329', nitprov: 81, precio: 35000 },
      { descripcion: 'LEONISA',orden: '3', almacen: '389', nitprov: 81, precio: 32000 },
      { descripcion: 'LESENSUE',orden: '4', almacen: '578', nitprov: 81, precio: 72000 }
  ];

rows =[];
filteredData = [];
temp =[];
array=[];
@ViewChild('table') table: DatatableComponent;
  // table: any;


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
   
   console.log("Resultado Columnas");
   console.log(this.columnDefs);

  }
  onSelect(id:any):void {
    console.log('ID->',id);
    // this.cities = this.dataSvc.getcities().filter(item => item.countryID = id);

  }

  onChange(id:any):void{
    console.log('IDM->',id);

  }



  async verTiendas(){
    debugger
    this.rows = this.rowData;
    this.temp = this.rows;

    //this.expFile();
    this.saveFile();
   
   // public items: Item[];

    //alert(this.formatosElejidos[0].Descripcion)
    //alert(this.formatosElejidos[0].IdFormato)
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

  updateFilter(event: any, col: string) {

    const val = event.target.value.toLowerCase();

    const res = this.array.findIndex(x => x.co === col);
    if (res !== -1) {
      this.array.splice(res, 1);
    }
    if (val.length > 0) {
      this.array.push({ co: col, va: val });
    }
    const temp = this.temp.filter((d) => {
      const arr = [];
      this.array.forEach(element => {
        if (element.co === 'id') {
          arr.push(d.id.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'descripcion') {
          arr.push(d.descripcion.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'valor') {
          arr.push(d.valor.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'orden') {
          arr.push(d.valor.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
      });
      let resultado = true;
      arr.forEach(element => {
        resultado = resultado && element;
      });
      return resultado;
    });
    this.rows = temp;
    this.table.offset = 0;
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

  saveTextAsFile (data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    var blob = new Blob([data], {type: 'text/plain'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
// FOR IE:

if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  window.navigator.msSaveOrOpenBlob(blob, filename);
}
else{
  var e = document.createEvent('MouseEvents'),
      a = document.createElement('a');

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
  e.initEvent('click', true, false);
  // e.initEvent('click', true, false, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);
}
}

expFile() {
var fileText = "I am the first part of the info being emailed.\r\nI am the second part.\r\nI am the third part.\r\nGerman Vasquez";
var fileName = "newfile001.txt"
this.saveTextAsFile(fileText, fileName);
}

saveFile() {
  let ArchText = "Por favor Guardame!\r\nGerman Vasquez\r\nArchivo Texto Interfaz";
  let NomArch = "Guarda-me001.txt"

  const blob = 
      new Blob([ArchText], 
               {type: "text/plain;charset=utf-8"});
  saveAs(blob, NomArch);
}
 
  

}
