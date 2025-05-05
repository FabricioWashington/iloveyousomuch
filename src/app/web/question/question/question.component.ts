import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {
  public question: boolean = false;
  public resposta: string = '';
  public resultado: string = '';
  amor = 0;
  mostrarAmor = true;

  private respostasCorretas: string[] = [
    'ginasio',
    'ginásio',
    'ginásio de esportes',
    'ginasio de esportes',
    'ginásio de sobradinho',
    'ginasio de sobradinho'
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  click(){
    this.question = true;
  }

  enviar(){
    const respostaUsuario = this.normalize(this.resposta);

    const acertou = this.respostasCorretas.some(respostaCorreta =>
      this.normalize(respostaCorreta) === respostaUsuario
    );

    if (acertou) {
      this.router.navigate(['/home']).then(success => {
      });
    } else {
      this.resultado = 'Resposta Incorreta';
    }
  }

  amorCompleto() {
    this.mostrarAmor = false;
  }

  private normalize(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

}
