import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharitiesComponent } from './charities/charities.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CharityEditComponent } from './charities/charity-edit/charity-edit.component';
import { CharityService } from './shared/charity.service';
import { AuthService } from './shared/auth/auth.service';
import { CharityLoginComponent } from './charities/charity-login/charity-login.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CharityViewComponent } from './charities/charity-view/charity-view.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CharitiesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharityEditComponent,
    CharityLoginComponent,
    CharityViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CharityService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
