import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets/bets.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetDetailsComponent } from './bet-details/bet-details.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'bets',
        component: BetsComponent,
        children: [
            { path: 'list', component: BetListComponent },
            { path: 'create', component: BetCreateComponent },
            { path: 'edit/:id', component: BetCreateComponent },
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
