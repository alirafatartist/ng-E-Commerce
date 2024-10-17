import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductsComponent } from './Components/products/products.component';
import { PorductItemComponent } from './Components/products/porduct-item/porduct-item.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogItemComponent } from './Components/blogs/blog-item/blog-item.component';

import { register } from 'swiper/element/bundle';
import { HomePageComponent } from './Components/homepage/homepage.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
register();



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    PorductItemComponent,
    ProductFilterPipe,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    BlogItemComponent,
    HomePageComponent,
    NewsletterComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
