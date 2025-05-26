import { TestBed } from '@angular/core/testing';

import { GameModel } from '@gog-test/game-model';
import { MOCK_PRODUCTS } from '@gog-test/mock-products';
import { CartStateService } from './cart-state.service';

const mockCartItems: GameModel[] = MOCK_PRODUCTS.slice(0, 2);

describe('CartStateService', () => {
  let service: CartStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty cart', () => {
    expect(service.cartItems()).toEqual([]);
  });

  it('should add an item to the cart', () => {
    const item = mockCartItems[0];
    service.addItem(item);
    expect(service.cartItems()).toContain(item);
  });

  it('should remove an item from the cart', () => {
    const item = mockCartItems[0];
    service.addItem(item);
    service.removeItem(item);
    expect(service.cartItems()).not.toContain(item);
  });

  it('should clear the cart', () => {
    service.resetCart(mockCartItems);
    expect(service.cartItems()).toEqual(mockCartItems);
    service.clearCart();
    expect(service.cartItems()).toEqual([]);
  });

  it('should check if an item is in the cart', () => {
    const item = mockCartItems[0];
    service.addItem(item);
    expect(service.hasItem(item)).toBe(true);
    const anotherItem = mockCartItems[1];
    expect(service.hasItem(anotherItem)).toBe(false);
  });

  it('should not add a duplicate item to the cart', () => {
    const item = mockCartItems[0];
    service.addItem(item);
    service.addItem(item); // Attempt to add the same item again
    expect(service.cartItems().length).toBe(1);
  });

  it('should emit isNeedToSync$ when an item is added or removed', done => {
    service.isNeedToSync$.subscribe(needSync => {
      expect(needSync).toBe(true);
      done();
    });
    const item = mockCartItems[0];
    service.addItem(item);
  });

  it('should consist right items count', () => {
    service.resetCart(mockCartItems);
    expect(service.cartItemsCount()).toBe(2);
    service.removeItem(mockCartItems[0]);
    expect(service.cartItemsCount()).toBe(1);
    service.clearCart();
    expect(service.cartItemsCount()).toBe(0);
  });
});
