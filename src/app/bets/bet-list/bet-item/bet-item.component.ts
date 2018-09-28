import { Component, OnInit, Input } from '@angular/core';
import { Bet } from '../../bet.model';

@Component({
  selector: 'app-bet-item',
  templateUrl: './bet-item.component.html',
  styleUrls: ['./bet-item.component.scss']
})
export class BetItemComponent implements OnInit {
  @Input() item: Bet;

  constructor() { }

  ngOnInit() {
  }

  getStarsArray(pages: number) {
    return new Array(pages).fill(1);
  }

}
