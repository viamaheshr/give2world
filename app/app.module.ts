import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharitiesComponent } from './charities/charities.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CharityEditComponent } from './charities/charity-edit/charity-edit.component';
import { CharityService } from './shared/charity.service';

@NgModule({
  declarations: [
    AppComponent,
    CharitiesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharityEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CharityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
