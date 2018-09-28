import { Injectable } from '@angular/core';
import { Bet } from './bet.model';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  bets = [
    new Bet(1, '/assets/img/bets/juniorvscolon.jpg', 'JUNIOR VS COLON', 2430, 'Adivina el marcador y gana!', 4, 'sports'),
    new Bet(2, '/assets/img/bets/desafio2018.jpg',
      'DESAFIO 2018', 2430, 'El desafio 2018 esta pronto a llegar a su final ¿Quien será el ganador?', 3, 'showbiz'),
    new Bet(3, '/assets/img/bets/thebest.jpg',
      'THE BEST', 2430,
      'Ronaldo, Modric y Salah, solo uno podra ser<br><strong>The Best FIFA Men\'s Player<strong>', 4, 'showbiz'),
    new Bet(4, '/assets/img/bets/vallenato.jpg'
      , '😆 #LosEspecialistasDelVallento', 2430, '¿Será que sale un conjunto vallenato de la especialización?', 4, 'funny'),
    new Bet(5, '/assets/img/bets/gokuvssuperman.jpg'
      , 'GOKU VS SUPERMAN', 2430, 'La batalla del siglo', 4, 'funny'),
    new Bet(6, '/assets/img/bets/vuelve.jpg'
      , '¿Será que **** vuelve con la novia?', 2430,
      'Ya han <strong>CORTADO 4 VECES</strong>, el dice que va a cambiar... ¿será que vuelven?', 4, 'funny'),
  ];

  constructor() { }

  getBets(): Bet[] {
    return this.bets.slice();
  }

  getByType(type: string) {
    return this.bets.filter(value => {
      return value.type.toLowerCase().indexOf(type.toLowerCase()) !== -1;
    });
  }

  find(id: number) {
    return this.bets.find(value => {
      return value.id === id;
    });
  }
}
