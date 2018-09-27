import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bet-sky';
  navbarActive = false;

  onNavbarToggle() {
    this.navbarActive = !this.navbarActive;
  }
}
