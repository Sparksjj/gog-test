import { TestBed } from '@angular/core/testing';

import { ProductsDataService } from './products-data.service';

describe('HeroDataService', () => {
  let service: ProductsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDataService],
    });
    service = TestBed.inject(ProductsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
