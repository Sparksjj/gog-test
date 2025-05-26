import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartStateService } from '@gog-test/cart-state';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let cartStateService: CartStateService;
  const event = new Event('transitionend');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    cartStateService = TestBed.inject(CartStateService);
    cartStateService.addItem(MOCK_HERO);
    fixture.componentRef.setInput('item', MOCK_HERO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item after animation', () => {
    const elementref = fixture.nativeElement;
    component.removeItem();
    expect(cartStateService.cartItems()).toContain(MOCK_HERO);

    elementref.dispatchEvent(event);
    fixture.detectChanges();

    expect(cartStateService.cartItems()).not.toContain(MOCK_HERO);
  });
});
