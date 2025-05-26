import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartStateService } from '@gog-test/cart-state';
import { MOCK_PRODUCTS } from '@gog-test/mock-products';
import { CartSumaryComponent } from './cart-sumary.component';

describe('CartSumaryComponent', () => {
  let component: CartSumaryComponent;
  let fixture: ComponentFixture<CartSumaryComponent>;
  let cartStateService: CartStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSumaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSumaryComponent);
    component = fixture.componentInstance;
    cartStateService = TestBed.inject(CartStateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty state', () => {
    const title = fixture.nativeElement.querySelector('.info__title');
    expect(title.textContent).toContain('No items in the cart');
  });

  it('should show right total price and count', () => {
    cartStateService.resetCart(MOCK_PRODUCTS);
    fixture.detectChanges();

    const totalPrice = MOCK_PRODUCTS.reduce(
      (sum, product) => sum + product.price,
      0
    );
    const count = MOCK_PRODUCTS.length;

    const totalPriceElement =
      fixture.nativeElement.querySelector('.info__price');
    const countElement = fixture.nativeElement.querySelector('.info__title');
    expect(totalPriceElement.textContent).toContain(
      totalPrice.toFixed(2).toString()
    );
    expect(countElement.textContent).toContain(count.toString());
  });

  it('check clear cart logic', () => {
    // check empty cart
    let clearBtn = fixture.nativeElement.querySelector('.clear');
    expect(clearBtn).toBeFalsy();

    // check cart with items
    cartStateService.resetCart(MOCK_PRODUCTS);
    fixture.detectChanges();

    clearBtn = fixture.nativeElement.querySelector('.clear');
    expect(clearBtn).toBeTruthy();

    jest.spyOn(component.clearCart, 'emit');
    jest.spyOn(component, 'onClearCart');

    clearBtn.click();
    fixture.detectChanges();

    expect(component.onClearCart).toHaveBeenCalled();
    expect(component.clearCart.emit).toHaveBeenCalled();
  });
});
