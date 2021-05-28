import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Formato } from './../interfaces/formato';

@Injectable()

export class FormatoService {

private apif = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/formatos'

constructor(private http: HttpClient) {}

async getFormatos(){

           return this.http.get(this.apif)
           .toPromise().then(res => {
              console.log(res);
              return res;
          }).catch(err => {
              return err;
          });
    }

}