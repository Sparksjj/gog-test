import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showCart state', () => {
    expect(component.showCart()).toBe(false);
    component.toggleCart();
    expect(component.showCart()).toBe(true);
    component.toggleCart();
    expect(component.showCart()).toBe(false);
  });
});
