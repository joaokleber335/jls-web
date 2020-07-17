import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhePedidoService {

  constructor(private http: HttpClient) { }

  getPedido(id) {
    return new Promise((resolve, reject) => this.http.get(`https://jls-api.herokuapp.com/v1/orders/${id}`)
      .toPromise()
      .then(res => resolve(res), error => reject(error)));
  }
}
