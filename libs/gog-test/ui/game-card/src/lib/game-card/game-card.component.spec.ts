import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { PictureLoaderDirective } from '@gog-test/picture-loader';
import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardComponent, PictureLoaderDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentRef.setInput('item', MOCK_HERO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
