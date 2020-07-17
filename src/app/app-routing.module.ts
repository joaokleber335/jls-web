import { DetalhePedidoComponent } from './views/detalhe-pedido/detalhe-pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {PessoaVarejoComponent} from "./views/pessoa-varejo/pessoa-varejo.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pessoa-varejo', component: PessoaVarejoComponent},
  { path: 'detalhe-pedido', component: DetalhePedidoComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
