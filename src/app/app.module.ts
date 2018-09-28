import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BetsComponent } from './bets/bets.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BetItemComponent } from './bets/bet-list/bet-item/bet-item.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BetDetailsComponent } from './bets/bet-details/bet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BetsComponent,
    BetListComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    BetItemComponent,
    FilterPipe,
    BetDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
