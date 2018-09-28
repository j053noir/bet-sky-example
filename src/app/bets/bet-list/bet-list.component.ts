import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarouselItem } from '../carousel-item.model';
import { BetService } from '../bet.service';
import { Bet } from '../bet.model';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit, OnDestroy {
  betSubscribe: Subscription;
  carouselIndex = 0;
  carouselItems = [
    new CarouselItem(0, '/assets/img/carousel/0.jpg'),
    new CarouselItem(1, '/assets/img/carousel/1.jpg'),
    new CarouselItem(2, '/assets/img/carousel/2.jpg'),
  ];
  bets: Bet[];

  constructor(private betService: BetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.betSubscribe = this.route.queryParamMap.subscribe(params => {
      const type = params.has('type') ? params.get('type') : '';
      this.bets = this.betService.getByType(type);
    });
  }

  ngOnDestroy() {
    this.betSubscribe.unsubscribe();
  }

  onSelectCarouselIndex(index: number) {
    this.carouselIndex = index;
  }

  onNextCarousel() {
    this.carouselIndex = ((this.carouselIndex + 1) >= this.carouselItems.length) ? 0 : this.carouselIndex + 1;
  }

  onPreviousCarousel() {
    this.carouselIndex = ((this.carouselIndex - 1) < 0) ? (this.carouselItems.length - 1) : this.carouselIndex - 1;
  }
}
