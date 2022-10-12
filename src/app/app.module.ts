import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';
import { SettingsComponent } from './settings/settings.component';
import { HomePageComponent } from './home-page/home-page.component';

//Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RefreshComponent } from './shared/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SettingsComponent,
    HomePageComponent,
    RefreshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
