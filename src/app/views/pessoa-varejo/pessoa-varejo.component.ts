import { PessoaVarejoService } from './pessoa-varejo.service';
import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-varejo',
  templateUrl: './pessoa-varejo.component.html',
  styleUrls: ['./pessoa-varejo.component.scss']
})
export class PessoaVarejoComponent implements OnInit {

  public varejista = {};
  public pedidos = [];
  constructor(private router: Router, private pessoaService: PessoaVarejoService) { }

  ngOnInit(): void {
    this.getVarejista();
  }

  getVarejista() {
    this.pessoaService.getVarejista()
      .then(response => {
        this.varejista = response['retailer'];
        this.pedidos = response['orders'];
      })
      .catch(err => {
        console.log(err);
      })
  }

  getPedido(pedido) {
    this.router.navigate(['/detalhe-pedido'], { queryParams: { id: pedido['order'] } });
  }
}
