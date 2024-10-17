import { WishlistService } from './../../Services/wishlist.service';
import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  productsCartcount: number = 0;
  productsWishlistcount: number = 0;
  _cartService: CartService = inject(CartService);
  _wishlistservice :WishlistService = inject(WishlistService);

  ngOnInit(): void {
    // Subscribe to the cart count updates
    this._cartService.productsCount$.subscribe((count) => {
      this.productsCartcount = count; // Update the count in the navbar
    });
    this._wishlistservice.productsCount$.subscribe((count) => {
      this.productsWishlistcount = count; // Update the count in the navbar
    });
  }

}
