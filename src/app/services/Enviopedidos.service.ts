import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../interfaces/pedido';
//

@Injectable()

export class EnvioPedidosService {

    private apiEP = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/enviarPedidos'
    
    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers: Headers, basic) {
        headers.append('Authorization', basic);
    }

    async getEnvioPedidos(jspedidos: any) {
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
            //params: new HttpParams().append('key', 'value')
        }
        console.log(options);

        return this.http.post(this.apiEP, jspedidos, options)
            .toPromise().then(res => {
                console.log(res);
                return res;
            }).catch(err => {
                return err;
            });
    }

}