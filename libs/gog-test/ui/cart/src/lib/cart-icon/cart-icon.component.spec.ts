import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartStateService } from '@gog-test/cart-state';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { CartIconComponent } from './cart-icon.component';

jest.useFakeTimers();
describe('CartIconComponent', () => {
  let component: CartIconComponent;
  let fixture: ComponentFixture<CartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartIconComponent);
    fixture.componentRef.setInput('showCart', false);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show right count', () => {
    const cartStateService = TestBed.inject(CartStateService);

    // without items in cart
    const countBage = fixture.nativeElement.querySelector('.count');
    expect(countBage.textContent).toContain('0');

    // with items in cart
    cartStateService.addItem(MOCK_HERO);
    fixture.detectChanges();
    expect(countBage.textContent).toContain('1');
  });

  it('shoud add/hide .filled class', () => {
    const cartStateService = TestBed.inject(CartStateService);
    const countBage = fixture.nativeElement.querySelector('.count');

    // without items in cart
    expect(countBage.classList.contains('filled')).toBeFalsy();

    // with items in cart
    cartStateService.addItem(MOCK_HERO);
    fixture.detectChanges();
    expect(countBage.classList.contains('filled')).toBeTruthy();
  });

  it('shoud toggle .animated class', () => {
    const cartStateService = TestBed.inject(CartStateService);
    const countBage = fixture.nativeElement.querySelector('.count');

    // with items in cart
    cartStateService.addItem(MOCK_HERO);
    fixture.detectChanges();
    expect(countBage.classList.contains('animated')).toBeTruthy();

    // after animation end animated class should be removed
    jest.runAllTimers();
    fixture.detectChanges();
    expect(countBage.classList.contains('animated')).toBeFalsy();
  });

  it('shouldn"t toggle cart .animated and .filled if cart open', () => {
    const cartStateService = TestBed.inject(CartStateService);
    const countBage = fixture.nativeElement.querySelector('.count');
    fixture.componentRef.setInput('showCart', true);
    cartStateService.addItem(MOCK_HERO);
    fixture.detectChanges();

    expect(countBage.classList.contains('animated')).toBeFalsy();
    expect(countBage.classList.contains('filled')).toBeFalsy();
  });
});
