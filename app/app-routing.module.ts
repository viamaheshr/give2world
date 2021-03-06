import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharityEditComponent } from './charities/charity-edit/charity-edit.component';
import { CharityLoginComponent } from './charities/charity-login/charity-login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'charities', component: CharitiesComponent, children: [
        { path: 'new', component: CharityEditComponent },
        { path: 'login', component: CharityLoginComponent }
    ] },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}