import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    tel: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    alert("Seu contato foi enviado.");
    this.formContato.reset();
  }

}
