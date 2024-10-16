import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products: any[] = []; // Store the cart products
  totalPrice: number = 0; // Total price of all products

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.products = this._cartService.getProducts(); // Retrieve products from the service
    this.calculateTotalPrice(); // Calculate the initial total price
    console.log(this.calculateTotalPrice());
  }

  increase(product: any) {
    product.amount++; // Increase the individual product amount
    this.calculateTotalPrice(); // Recalculate total price
  }

  decrease(product: any) {
    if (product.amount > 1) {
      product.amount--; // Decrease the individual product amount
      this.calculateTotalPrice(); // Recalculate total price
    }
  }

  remove(product: any) {
    this._cartService.removeProduct(product); // Call the service to remove the product
    this.products = this._cartService.getProducts(); // Refresh products from the service
    this.calculateTotalPrice(); // Recalculate total price after removal
  }

  calculateTotalPrice() {
    this.totalPrice = this.products.reduce((total, product) => {
      // Parse the newPrice to a float, removing the dollar sign
      const price = parseFloat(product.newPrice.replace('$', '').replace(',', ''));
      return total + (price * product.amount); // Use parsed price for calculations
    }, 0);
  }
}
