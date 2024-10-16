import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  productsCount: number = 0;
  _cartService: CartService = inject(CartService);

  ngOnInit(): void {
    // Subscribe to the cart count updates
    this._cartService.productsCount$.subscribe((count) => {
      this.productsCount = count; // Update the count in the navbar
    });
  }
}
