import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], selectedType: string): any[] {
    if (!products || !selectedType || selectedType === 'All') {
      return products;
    }

    return products.filter(product => product.Type === selectedType);
  }

}
