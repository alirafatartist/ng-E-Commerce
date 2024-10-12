import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'homepage', component: HomePageComponent },
  { path: '**',redirectTo:'homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
