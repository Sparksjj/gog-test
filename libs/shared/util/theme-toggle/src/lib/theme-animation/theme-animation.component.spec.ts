import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeAnimationComponent } from './theme-animation.component';

describe('ThemeAnimationComponent', () => {
  let component: ThemeAnimationComponent;
  let fixture: ComponentFixture<ThemeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeAnimationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
