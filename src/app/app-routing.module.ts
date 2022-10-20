import { HomePageComponent } from './pages/home-page/home-page.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'coin-details/:id', component: CryptoDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
