import { TestBed } from '@angular/core/testing';

import { ProductsDataService } from './products-data.service';

// no sense to test this service with mock data
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
