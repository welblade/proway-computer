import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { ProdutosService } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor(private produtosService: ProdutosService) {
    this.recuperaProdutos();
  }

  recuperaProdutos() : IProdutoCarrinho[] {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarItem(produto: IProdutoCarrinho) {
    let element = this.itens.find(item => item.id == produto.id);
    if (element != undefined) {
      this.itens.find(item => item.id == produto.id)!.quantidade += produto.quantidade
    } else {
      this.itens.push(produto);
    }
    this.salvaCarrinho();
  }

  removerItemById(produtoId: number) {
    this.itens = this.itens.filter(item => item.id != produtoId);
    this.salvaCarrinho();
  }

  atualizaItem(produto: IProdutoCarrinho) {
    const index = this.itens.findIndex(item => item.id == produto.id)
    if (index >= 0) {
      this.itens[index] = produto;
    }
    this.salvaCarrinho();
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  private salvaCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
