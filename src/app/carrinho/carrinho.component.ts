import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: IProdutoCarrinho[] = [];
  valorTotal = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.updateCarrinho();
  }

  updateCarrinho() {
    this.carrinho = this.carrinhoService.recuperaProdutos();
    this.calculaValorTotal();
  }

  private calculaValorTotal() {
    this.valorTotal = this.carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  }

  removeProduto(produtoId: number) {
    this.carrinhoService.removerItemById(produtoId);
    this.updateCarrinho();
  }

  atualizaQuantidade(produto: IProdutoCarrinho) {
    this.carrinhoService.atualizaItem(produto);
    this.updateCarrinho();
  }

}
