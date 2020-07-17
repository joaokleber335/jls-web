import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DetalhePedidoService } from './detalhe-pedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.scss']
})
export class DetalhePedidoComponent implements OnInit {

  public id = '';
  public cliente = {};
  public order = {};

  estoque = [];
  itemSolicitar = [];

  constructor(private route: ActivatedRoute, private detalhePedido: DetalhePedidoService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.id = data['id'];
      this.getPedido(this.id);
    });
  }

  getPedido(id) {
    this.detalhePedido.getPedido(id)
      .then(response => {
        this.cliente = response['order']['customer'];
        this.order = response['order'];
        this.estoque = response['order']['productsRetailer'];
        this.itemSolicitar = response['order']['productsWholesaler'];
      })
      .catch(err => {
        console.log(err);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  enviaPedido() {
    this.itemSolicitar = [];
  }

}
