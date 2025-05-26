import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { GameCardFooterComponent } from './game-card-footer.component';

describe('GameCardFooterComponent', () => {
  let component: GameCardFooterComponent;
  let fixture: ComponentFixture<GameCardFooterComponent>;
  const owned = { ...MOCK_HERO, isOwned: true };
  const notOwned = { ...MOCK_HERO, isOwned: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardFooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('item', owned);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show right data if isOwner', () => {
    fixture.componentRef.setInput('item', owned);
    fixture.detectChanges();

    const bageElement = fixture.nativeElement.querySelector('.price');
    expect(bageElement.textContent).toContain('owned');
  });

  it('should show right data if not an owner and not in cart (with discount)', () => {
    // with discount
    fixture.componentRef.setInput('item', { ...notOwned, discount: 20 });
    fixture.detectChanges();

    const bageElement = fixture.nativeElement.querySelector('.price');
    const discountElement = fixture.nativeElement.querySelector('.discount');
    expect(bageElement).toBeTruthy();
    expect(discountElement).toBeTruthy();
  });

  it('should show right data if not an owner and not in cart (without discount)', () => {
    // without discount
    fixture.componentRef.setInput('item', { ...notOwned, discount: 0 });
    fixture.detectChanges();

    const bageElement = fixture.nativeElement.querySelector('.price');
    const discountElement = fixture.nativeElement.querySelector('.discount');
    expect(discountElement).toBeFalsy();
    expect(bageElement).toBeTruthy();
  });

  it('should show right data if in cart', () => {
    fixture.componentRef.setInput('item', notOwned);
    fixture.componentInstance.addToCart();
    fixture.detectChanges();

    const bageElement = fixture.nativeElement.querySelector('.price');
    expect(bageElement.textContent).toContain('in cart');
  });
});
