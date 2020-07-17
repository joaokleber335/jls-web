import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaVarejoService {

  constructor(private http: HttpClient) { }

  getVarejista() {
    return new Promise((resolve, reject) => this.http.get('https://jls-api.herokuapp.com/v1/retailers/5eaf8a12ea535a00211dbe20/orders')
      .toPromise()
      .then(res => resolve(res), error => reject(error)));
  }
}
