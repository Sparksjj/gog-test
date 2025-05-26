import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartStateService } from '@gog-test/cart-state';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { CartPopoverComponent } from './cart-popover.component';

describe('CartPopoverComponent', () => {
  let component: CartPopoverComponent;
  let fixture: ComponentFixture<CartPopoverComponent>;
  let cartStateService: CartStateService;
  const event = new Event('transitionend');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPopoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPopoverComponent);
    cartStateService = TestBed.inject(CartStateService);
    cartStateService.resetCart([MOCK_HERO]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear cart after animation', () => {
    const elementref = fixture.nativeElement.querySelector('#items-in-cart');
    component.clearCart();
    expect(cartStateService.cartItems()).toContain(MOCK_HERO);

    elementref.dispatchEvent(event);
    fixture.detectChanges();

    expect(cartStateService.cartItems()).not.toContain(MOCK_HERO);
  });
});
