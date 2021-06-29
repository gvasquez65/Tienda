import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from './../interfaces/pedido';

@Injectable()

export class PedidosService {

private apiP = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/pedidos'

constructor(private http: HttpClient) {}

async getPedidos(IdAlmacen: any){

           return this.http.post(this.apiP,IdAlmacen)
           .toPromise().then(res => {
              console.log(res);
              return res;
          }).catch(err => {
              return err;
          });
    }

}