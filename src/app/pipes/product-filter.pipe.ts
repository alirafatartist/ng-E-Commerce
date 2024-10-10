import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], type: string): any[] {
    if (!products || !type || type === 'All') {
      return products;
    }
    return products.filter(product => product.Type === type);
  }
}
