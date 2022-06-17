import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  listAll(): IProduto[] {
    return this.produtos;
  }

  findById(produtoId: number) : IProduto | undefined  {
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
