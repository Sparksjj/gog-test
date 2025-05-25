import { inject, Pipe, PipeTransform } from '@angular/core';
import { DISCOUNT_CONFIG } from './configs';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  private formatter = inject(DISCOUNT_CONFIG);

  transform(value: number): string {
    return this.formatter(value);
  }
}
