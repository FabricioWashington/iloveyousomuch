import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-amor',
  standalone: false,
  templateUrl: './amor.component.html',
  styleUrl: './amor.component.scss'
})
export class AmorComponent {
  @Output() completo = new EventEmitter<void>();

  amor = 0;
  coracoes: { left: number; duracao: number }[] = [];
  mensagem = 'Clique ou aperte espaço para espalhar amor 💖';

  private inatividadeTimer: any;
  private decaimentoInterval: any;

  constructor() {
    this.iniciarDecaimento();
  }

  handleClickOrSpace() {
    if (this.amor < 100) {
      this.amor += 5;
      if (this.amor > 100) this.amor = 100;

      this.espalharCoracao();
      this.mensagem = 'Uau! Continua espalhando amor ❤️';
    }

    if (this.amor >= 100) {
      this.mensagem = 'Amor completo! Você é meu 100% 💘';
      this.completo.emit();
    }

    this.reiniciarInatividade();
  }

  espalharCoracao() {
    const novo = {
      left: this.amor,
      duracao: 1 + Math.random() * 2
    };
    this.coracoes.push(novo);
    setTimeout(() => this.coracoes.shift(), novo.duracao * 1000);
  }

  iniciarDecaimento() {
    this.reiniciarInatividade();
  }

  reiniciarInatividade() {
    clearTimeout(this.inatividadeTimer);
    clearInterval(this.decaimentoInterval);

    this.inatividadeTimer = setTimeout(() => {
      this.mensagem = 'Ei! O amor tá esfriando... não pare 💔';

      this.decaimentoInterval = setInterval(() => {
        if (this.amor > 0) {
          this.amor -= 1;
        } else {
          clearInterval(this.decaimentoInterval);
          this.mensagem = 'O amor zerou... recomece! 💫';
        }
      }, 100);
    }, 1000);
  }
}
