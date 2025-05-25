import { inject, InjectionToken } from '@angular/core';
import { CurrencyConfig } from '../models';

export const CURRENCY_SYMBOL = new InjectionToken<string>('Currency symbol', {
  factory: () => '$',
});

export const CURRENCY_CONFIG = new InjectionToken<CurrencyConfig>(
  'Format currency value',
  {
    factory: () => {
      const simbol = inject(CURRENCY_SYMBOL);
      return (value: number): string => `${simbol}${value}`;
    },
  }
);
