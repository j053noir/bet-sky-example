import { Component, OnInit } from '@angular/core';
import { Bet } from '../bet.model';
import { BetService } from '../bet.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-bet-details',
  templateUrl: './bet-details.component.html',
  styleUrls: ['./bet-details.component.scss']
})
export class BetDetailsComponent implements OnInit {
  id: number;
  bet: Bet;
  betSubscription: Subscription;

  constructor(private betService: BetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.betSubscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.bet = this.betService.find(this.id);
      } else {
        alert('Not valid id');
      }
    });
  }

  getStarsArray(pages: number) {
    return new Array(pages).fill(1);
  }

  onPlaceBet() {
    alertify.prompt('Colocar apuesta', '¿Cuanto es el valor que desea apostar?', ''
      , function (evt, value: number) {
        if (!isNaN(value) && value >= 2430) {
          alertify.success('Usted ingreso: ' + value, + ' será redirigido a la plataforma de pagos...');
        } else if (isNaN(value)) {
          alertify.error('Valor no es valido');
        } else {
          alertify.error('Valor debe ser mayor a 2430');
        }
      }
      , function () { });
  }
}
