import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  tela = 'home';

  jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];;

  personagens = [
    {casa: 'Stark', nome: 'Benjen'},
    {casa: 'Targaryen', nome: 'Danerys'},
    {casa: 'Lannister', nome: 'Tywin'},
    {casa: 'Baratheon', nome: 'Robert'},
    {casa: 'Greyjoy', nome: 'Ballon'}];

  casas = ['Stark', 'Targaryen', 'Lannister', 'Baratheon', 'Greyjoy'];

  constructor() { }

  salvar(nome: string) {
    const jogador = {
      nome,
      acertos: 0,
      erros: 0,
    };
    this.jogadores.push(jogador);
    localStorage.setItem('jogadores', JSON.stringify(this.jogadores));
  }

  jogar(joga, familia, personagem) {
    personagem = this.personagens.find(n => n.nome === personagem);
    if (personagem.casa === familia) {
      const jogador = this.jogadores.find(n => n.nome === joga);
      jogador.nome = joga.nome;
      jogador.acertos = joga.acertos + 1;
      jogador.erros = joga.erros;
      localStorage.setItem('jogadores', JSON.stringify(this.jogadores));
    } else {
      const jogador = this.jogadores.find(n => n.nome === joga);
      jogador.nome = joga.nome;
      jogador.acertos = joga.acertos;
      jogador.erros = joga.erros + 1;
      localStorage.setItem('jogadores', JSON.stringify(this.jogadores));
    }
  }

  irPara(nome) {
    this.tela = nome;
  }

  listaPersonagens() {
    return this.personagens;
  }

  listaCasas() {
    return this.casas;
  }

  resultado(jogador) {
    return this.jogadores.find(n => n.nome === jogador.nome);
  }
}
