import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from './bet.model';
import { CarouselItem } from './carousel-item.model';

@Component({
    selector: 'app-bets',
    templateUrl: './bets.component.html',
    styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onFilterBy(type: string) {
        if (type === '') {
            this.router.navigate(['/bets']);
        } else {
            this.router.navigate(['/bets'], { queryParams: { type: type } });
        }
    }
}
