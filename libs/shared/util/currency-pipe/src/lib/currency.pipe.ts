import { inject, Pipe, PipeTransform } from '@angular/core';
import { CURRENCY_CONFIG } from './configs';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  private formatter = inject(CURRENCY_CONFIG);

  transform(value: number): string {
    return this.formatter(value);
  }
}
