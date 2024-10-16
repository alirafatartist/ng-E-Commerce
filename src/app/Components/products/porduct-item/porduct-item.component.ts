import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-porduct-item',
  templateUrl: './porduct-item.component.html',
  styleUrls: ['./porduct-item.component.scss'],
})
export class PorductItemComponent {
  _cartservice = inject(CartService);
   _toastr =inject(ToastrService)
  @Input({ required: true }) prd: any;

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive; // Toggle the active state
  }
  productAdded() {
    this._toastr.success('Product Added', '', {
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      toastClass: 'ngx-toastr',
    });
  }
  addTocart(product: any) {
    console.log(product);
    this._cartservice.addToProducts(product);
    this.productAdded()
  }
}
