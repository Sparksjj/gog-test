import { TestBed } from '@angular/core/testing';

import { HeroDataService } from './hero-data.service';

describe('HeroDataService', () => {
  let service: HeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDataService],
    });
    service = TestBed.inject(HeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
