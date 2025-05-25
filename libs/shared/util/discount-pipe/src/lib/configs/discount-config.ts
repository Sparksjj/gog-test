import { InjectionToken } from '@angular/core';
import { DiscountConfig } from '../models';

export const DISCOUNT_CONFIG = new InjectionToken<DiscountConfig>(
  'Format discount value',
  {
    factory:
      () =>
      (value: number): string =>
        `-${value}%`,
  }
);
