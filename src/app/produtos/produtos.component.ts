import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] = [];
  descricao: String = "";

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const produtos = this.produtoService.listAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      if(descricao) {
        this.produtos = produtos.filter(_it => _it.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    });

  }

}
