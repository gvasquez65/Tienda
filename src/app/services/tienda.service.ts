import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Formato } from '../interfaces/formato';

import { Tienda } from './../interfaces/tienda';

@Injectable()

export class TiendaService {

private apiT = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/tiendas'

constructor(private http: HttpClient) {}

async getTiendas(IdPais: any){

           return this.http.post(this.apiT,IdPais)
           .toPromise().then(res => {
              console.log(res);
              return res;
          }).catch(err => {
              return err;
          });
    }

}