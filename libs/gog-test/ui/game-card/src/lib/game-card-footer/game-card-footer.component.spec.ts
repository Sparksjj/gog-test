import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { GameCardFooterComponent } from './game-card-footer.component';

describe('GameCardFooterComponent', () => {
  let component: GameCardFooterComponent;
  let fixture: ComponentFixture<GameCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardFooterComponent);
    fixture.componentRef.setInput('item', MOCK_HERO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
