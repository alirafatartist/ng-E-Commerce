import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  products: any[] = [];
  productsCountSubject = new BehaviorSubject<number>(0);
  productsCount$ = this.productsCountSubject.asObservable();

  constructor() {
    const savedProducts = localStorage.getItem('WishlistProducts');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    }
    // Initialize products count from localStorage
    this.productsCountSubject.next(this.products.length);
  }

  addToProducts(product: any) {
    this.products.push(product);
    this.saveProducts();
    this.productsCountSubject.next(this.products.length); // Update count
  }

  removeProduct(product: any) {
    const productIndex = this.products.findIndex((p) => p.id === product.id); // Assuming each product has a unique 'id'
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1); // Remove the product
      this.saveProducts(); // Ensure to update local storage
      this.productsCountSubject.next(this.products.length); // Update count
    }
  }

  clearCart() {
    this.products = [];
    this.saveProducts(); // Save to localStorage when clearing
    this.productsCountSubject.next(this.products.length); // Reset count to 0
  }

  // Save products to localStorage
  private saveProducts() {
    localStorage.setItem('WishlistProducts', JSON.stringify(this.products));
  }

  // Retrieve the products in the cart
  getProducts() {
    return this.products;
  }

  private wishlistState: { [productId: string]: boolean } = {};

  toggleWishlist(productId: string, isActive: boolean) {
    this.wishlistState[productId] = isActive;
  }

  isProductInWishlist(productId: string): boolean {
    return !!this.wishlistState[productId];
  }

}
