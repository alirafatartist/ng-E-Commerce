import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  products: any[] = []; // Store the cart products
  totalPrice: number = 0; // Total price of all products

  constructor(private _wishlistService: WishlistService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.products = this._wishlistService.getProducts();
    this.calculateTotalPrice();
    console.log(this.calculateTotalPrice());
  }

  increase(product: any) {
    product.amount++;
    this.calculateTotalPrice();
  }

  decrease(product: any) {
    if (product?.amount > 1) {
      product.amount--;
      this.calculateTotalPrice();
    }
  }

  remove(product: any) {
    this._wishlistService.removeProduct(product);
    this.products = this._wishlistService.getProducts();
    this.calculateTotalPrice();
    this.productRemoved()
  }

  calculateTotalPrice() {
    this.totalPrice = this.products.reduce((total, product) => {
      // Parse the newPrice to a float, removing the dollar sign
      const price = parseFloat(product.newPrice.replace('$', '').replace(',', ''));
      return total + (price * product.amount); // Use parsed price for calculations
    }, 0);
  }


  productRemoved() {
    this.toastr.error('Product Removed', '', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'ngx-toastr',
    });
  }
}
