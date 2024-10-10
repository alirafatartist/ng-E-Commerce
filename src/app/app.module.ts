import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductsComponent } from './Components/products/products.component';
import { PorductItemComponent } from './Components/products/porduct-item/porduct-item.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    PorductItemComponent,
    ProductFilterPipe,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
