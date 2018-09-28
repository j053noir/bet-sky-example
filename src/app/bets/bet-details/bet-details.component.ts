import { Component, OnInit } from '@angular/core';
import { Bet } from '../bet.model';
import { BetService } from '../bet.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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

}
