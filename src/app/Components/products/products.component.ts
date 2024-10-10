import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:any[]=[];
  selectedType:string='All';
  constructor(private productServices:ProductService){

  }
  ngOnInit(): void {
    this.products=this.productServices.getProducts();
  }
  setSelectedType(type: string) {
    this.selectedType = type; // Set the selected type
  }
}
