import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.css']
})
export class FormBuscaComponent implements OnInit {
  descricao = "";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  pesquisar() {
    this.route.navigate(["produtos"], {queryParams: { descricao: this.descricao }})
  }
}
