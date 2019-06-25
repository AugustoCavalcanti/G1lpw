import { Component } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jogadas = 0;
  nome = null;
  casa = null;
  personagem = null;

  constructor(private jogo: ServicoService) {
  }

  salvar(form) {
    this.jogo.salvar(this.nome);
    form.reset();
  }

  jogar(form) {
    this.jogo.jogar(this.nome, this.casa, this.personagem);
    form.reset();
  }

  resultado() {
    return this.jogo.resultado(this.nome);
  }
}

