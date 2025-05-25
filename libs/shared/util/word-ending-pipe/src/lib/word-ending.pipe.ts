import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordEnding',
})
export class WordEndingPipe implements PipeTransform {
  // This pipe should be mach more complex, but for now it just adds 's' to the end of the word if the amount is not 1.
  transform(value: string, amount: number): string {
    return amount === 1 ? value : value + 's';
  }
}
