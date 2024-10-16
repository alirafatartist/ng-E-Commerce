import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-porduct-item',
  templateUrl: './porduct-item.component.html',
  styleUrls: ['./porduct-item.component.scss'],
})
export class PorductItemComponent {
  _cartservice = inject(CartService);
  @Input({ required: true }) prd: any;

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive; // Toggle the active state
  }

  addTocart(product: any) {
    console.log(product);
    this._cartservice.addToProducts(product); // Add the product to the cart
  }
}
