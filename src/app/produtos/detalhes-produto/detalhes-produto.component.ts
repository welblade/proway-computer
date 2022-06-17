import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificador: NotificacaoService,
    private carrinho: CarrinhoService
    ) { }

  ngOnInit(): void {
    const paramMap = this.route.snapshot.paramMap;
    const idProduto = Number(paramMap.get("id"));
    this.produto = this.produtoService.findById(idProduto);
  }

  adicionarAoCarrinho(){
    this.notificador.notificar(`${this.produto?.descricao} adicionado ao carrinho.`);
    const produtoCarrinho: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinho.adicionarItem(produtoCarrinho);
  }

}
