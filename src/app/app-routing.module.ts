import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/homepage/homepage.component';
import { authGuard } from './Guards/auth.guard';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'homepage', component: HomePageComponent,canActivate:[authGuard] },
  { path: 'cart', component: CartComponent,canActivate:[authGuard] },
  { path: 'wishlist', component: WishlistComponent,canActivate:[authGuard] },
  // { path: '**',redirectTo:'homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
