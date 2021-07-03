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
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../interfaces/pedido';
import { EnvioPedidosService } from '../services/Enviopedidos.service';
// import { MatDialog } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';


interface NombrePaises {
  id: number,
  name: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [PaisService,FormatoService,TiendaService,PedidosService,EnvioPedidosService]
})

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: './ventana/dialog-content-example-dialog.html',
// })
//  export class DialogContentExampleDialog {}

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
  public pedidos : Pedido[];
  public labelPosition: 'after';
  public isDisabled = true;
  public isDisabledEnvio = true;
  public ResultadoEnvio = 'No hay datos';

  
  
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
      { descripcion: 'ZEBRA', numeroorden: '2', almacen: '329', nitprov: 81,fecha:'05/29/2021',idregistro: 'REPOS',codlargo: '1081106 328022301481001',ean:'7703625219156',cantidad: 1,preciofacturacion: '34000',precio: '35000' },
      { descripcion: 'LEONISA',numeroorden: '3', almacen: '389', nitprov: 81, fecha:'05/29/2021',idregistro: 'REPOS',codlargo: '1081301 328022301481001',ean:'7703625238720',cantidad: 2,preciofacturacion:'34500',precio: '32000' },
      { descripcion: 'LESENSUE',numeroorden: '4', almacen: '578', nitprov: 81, fecha:'05/29/2021',idregistro: 'REPOS',codlargo: '1081058 367002301481001',ean:'7703625201717',cantidad: 2,preciofacturacion:'73000',precio: '72000' }
  ];

rows =[];
filteredData = [];
temp =[];
array=[];
@ViewChild('table') table: DatatableComponent;
  // table: any;


  constructor(private paisSvc:PaisService,
    private formatoSvc:FormatoService,
    private tiendaSvc:TiendaService,
    private pedidoSvc:PedidosService,
    private EnviopedidoSvc:EnvioPedidosService,
    private dialog: MatDialog,) { 
    }


  async ngOnInit() {
   
   // this.nombrepais="Colombia";
    
       
    this.isDisabled = true;

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
    // this.rows = this.rowData;
    // this.temp = this.rows;

    const tiendasE = [];
        
    this.tiendasElejidas.forEach(element => {
      tiendasE.push({"tienda": element.idAlmacen});
      //console.log('Tienda JSON->', element.idAlmacen);
    }); 
    console.log('Tienda filtrada JSON->',tiendasE);
    const jsonT ={"almacenes": tiendasE};
        //const pedidos = JSON.stringify(jsonT);
    const Pedidos: any  = jsonT;

    //console.log('Formato JSON->',formatos);
    console.log('Pedidos JSON ->',Pedidos);

    const resultadoT  = await this.pedidoSvc.getPedidos(Pedidos);

    const datosP: Pedido[] = JSON.parse(resultadoT).Table1;
   console.log("Resultado Pedidos");
   console.log(datosP);

   this.pedidos = datosP;
   console.log("Ped->",this.pedidos);

   //this.tiendas = datosP;
    this.rows = this.pedidos;
    this.temp = this.rows;


    this.isDisabledEnvio = false;

    //this.expFile();
   // this.saveFile();
       
    // public items: Item[];

    //alert(this.formatosElejidos[0].Descripcion)
    //alert(this.formatosElejidos[0].IdFormato)
    //alert(this.formatosElejidos[1].IdFormato)
   
    
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: this.ResultadoEnvio,
        buttonText: {
          cancel: 'hecho'
        }
      },
    });
  }

  
  // openAlertDialog() {
  //   const dialogRef = this.dialog.open(AlertDialogComponent,{
  //     data:{
  //       message: 'HelloWorld',
  //       buttonText: {
  //         cancel: 'Done'
  //       }
  //     },
  //   });
  // }

  async EnviarPedidos(){
    const jspedidos = JSON.stringify(this.pedidos);
    console.log('Pedidos JSON->',jspedidos);

    const resultadoEnvio  = await this.EnviopedidoSvc.getEnvioPedidos(jspedidos);
    console.log(resultadoEnvio);
    this.ResultadoEnvio = resultadoEnvio;
    
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
        if (element.co === 'NumeroOrden') {
          arr.push(d.NumeroOrden.toString().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'idAlmacen') {
          //arr.push(d.idAlmacen.toLowerCase().indexOf(element.va) !== -1 || !element.va);
          arr.push(d.idAlmacen.toString().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'ID_Registro') {
          arr.push(d.ID_Registro.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'NumeroOrden_Aux') {
          arr.push(d.NumeroOrden_Aux.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'IdPlu') {
          arr.push(d.IdPlu.toString().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'FechaPedido') {
          arr.push(d.FechaPedido.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'Cantidad') {
          arr.push(d.Cantidad.toString().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'CodigoLargo') {
          arr.push(d.CodigoLargo.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'CodigoEAN') {
          arr.push(d.CodigoEAN.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'PrecioFacturacion') {
          arr.push(d.PrecioFacturacion.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        if (element.co === 'PrecioPublico') {
          arr.push(d.PrecioPublico.toLowerCase().indexOf(element.va) !== -1 || !element.va);
        }
        
      });
      let resultado = true;
      arr.forEach(element => {
        resultado = resultado && element;
      });
      
      return resultado;
    });
    //console.log('Filtro Pedidos->',temp);
    this.pedidos = temp;
    this.rows = temp;
    this.table.offset = 0;
  }



  async seleccionaFormato(item: any){
       debugger;
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

    this.isDisabled = false;
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


  var reader = new FileReader();
  reader.addEventListener("loadend", function() {
     // reader.result contains the contents of blob as a typed array
  });
  reader.readAsArrayBuffer(blob);
  console.log('leer Archivo->',reader);
}

changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any) : void {
  var file:File = inputValue.files[0]; 
  var myReader:FileReader = new FileReader();

  myReader.onloadend = function(e){
    // you can perform an action with readed data here
    console.log('leer Archivo->',myReader.result);
    //console.log(myReader.result);
  }

  myReader.readAsText(file);
  
}


}
