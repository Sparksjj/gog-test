import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartSumaryComponent } from './cart-sumary.component';

describe('CartSumaryComponent', () => {
  let component: CartSumaryComponent;
  let fixture: ComponentFixture<CartSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSumaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
