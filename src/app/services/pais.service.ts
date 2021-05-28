import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pais } from './../interfaces/pais';

@Injectable()

export class PaisService {
 private paises :  Pais[]= [
     {IdPais: '169', Descripcion: 'Colombia'},
     {IdPais: '196', Descripcion: 'Costa Rica'} ,
     {IdPais: '239', Descripcion: 'Ecuador'},
     {IdPais: '317', Descripcion: 'Guatemala'},
     {IdPais: '493', Descripcion: 'Mexico'},
     {IdPais: '580', Descripcion: 'Panama'},
     {IdPais: '589', Descripcion: 'Peru'},
     {IdPais: '611', Descripcion: 'Puerto Rico'},
     {IdPais: '647', Descripcion: 'Republica Dominicana'},
 ]
 // private http:HttpClient
private api = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/paises'
//private api = 'https://jsonplaceholder.typicode.com/todos';
 
 


 constructor(private http: HttpClient) {}
 getPaises(): Pais[] {
  return this.paises;
}
  // getPaises1() {
  //   // const path = `${this.api}`;
  //   //  return this.http.get<Pais[]>(path);

  //   //try some HTTP request:
  //   this.http.get(this.api).subscribe(data => {
  //     console.log("Resultado data");
  //     console.log(data);
  //     return data;
  //   });
  async getPaises1(){

//   this.http.get('http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/paises')
//   .subscribe(data => {   // data is already a JSON object
//       console.log(data['someProperty']);
//   });

   return this.http.get('http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/paises')
  // return this.HttpClient.get('http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/paises')
      .toPromise().then(res => {
          console.log(res);
          return res;
      }).catch(err => {
          return err;
      });
}
//   private api = 'https://jsonplaceholder.typicode.com/todos';


  // constructor(
  //   private http:HttpClient )
  //    { }
  //    getAllPais() {
  //     const path = `${this.api}`;
  //     return this.http.get<Pais[]>(path);
  //   }
//     getPais(id: string) {

//       const path = `${this.api}/todos/${id}`;
//       return this.http.get<Pais>(path);
//     }

}