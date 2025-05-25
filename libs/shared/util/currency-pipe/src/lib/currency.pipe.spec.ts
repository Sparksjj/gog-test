import { inject, TestBed } from '@angular/core/testing';
import { CURRENCY_CONFIG } from './configs';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyConfig } from './models';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CurrencyPipe],
    }).compileComponents();

    pipe = TestBed.inject(CurrencyPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return right value', inject(
    [CURRENCY_CONFIG],
    (config: CurrencyConfig) => {
      expect(pipe.transform(10)).toContain(config(10));
    }
  ));
});
