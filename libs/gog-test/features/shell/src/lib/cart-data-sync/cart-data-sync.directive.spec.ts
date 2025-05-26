import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDataService } from '@gog-test/cart-data';
import { CartStateService } from '@gog-test/cart-state';
import { CartDataSyncDirective } from './cart-data-sync.directive';

jest.useFakeTimers();
describe('CartDataSyncDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [CartDataService],
    }).createComponent(TestComponent);
  });
  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should get initial data', () => {
    const cartDataService = TestBed.inject(CartDataService);
    jest.spyOn(cartDataService, 'getItems');
    fixture.detectChanges();
    expect(cartDataService.getItems).toHaveBeenCalled();
  });

  it('should sync data on cart change', () => {
    const cartDataService = TestBed.inject(CartDataService);
    const cartStateService = TestBed.inject(CartStateService);
    jest.spyOn(cartDataService, 'saveItems');
    cartStateService.resetCart([]);
    jest.runAllTimers();

    expect(cartDataService.saveItems).toHaveBeenCalled();
  });
});

@Component({
  template: `<span lib-cart-data-sync></span>`,
  imports: [CartDataSyncDirective],
})
class TestComponent {}
