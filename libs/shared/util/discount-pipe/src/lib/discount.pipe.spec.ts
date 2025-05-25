import { inject, TestBed } from '@angular/core/testing';
import { DISCOUNT_CONFIG } from './configs';
import { DiscountPipe } from './discount.pipe';
import { DiscountConfig } from './models';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DiscountPipe],
    }).compileComponents();

    pipe = TestBed.inject(DiscountPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return right value', inject(
    [DISCOUNT_CONFIG],
    (config: DiscountConfig) => {
      expect(pipe.transform(10)).toContain(config(10));
    }
  ));
});
