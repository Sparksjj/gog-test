import { TestBed } from '@angular/core/testing';

import { CartDataService } from './cart-data.service';

// no sense to test this service with mock data
describe('CartDataService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartDataService],
    });
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
