import { HomePageComponent } from './home-page/home-page.component';
import { SettingsComponent } from './settings/settings.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'crypto-details/:id', component: CryptoDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
