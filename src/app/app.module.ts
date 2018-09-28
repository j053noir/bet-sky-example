import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BetDetailsComponent } from './bets/bet-details/bet-details.component';
import { BetItemComponent } from './bets/bet-list/bet-item/bet-item.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';
import { BetsComponent } from './bets/bets.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BetManageComponent } from './bets/bet-manage/bet-manage.component';

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
    BetDetailsComponent,
    BetManageComponent,
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
