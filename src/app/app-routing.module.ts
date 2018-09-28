import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets/bets.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { BetDetailsComponent } from './bets/bet-details/bet-details.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'bets',
        component: BetsComponent,
        children: [
            { path: 'list', component: BetListComponent },
            { path: 'details/:id', component: BetDetailsComponent },
            { path: '', component: BetListComponent }
        ]
    },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
