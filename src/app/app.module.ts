import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BetsComponent } from './bets/bets.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetDetailsComponent } from './bet-details/bet-details.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BetsComponent,
    BetListComponent,
    BetCreateComponent,
    BetDetailsComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
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
