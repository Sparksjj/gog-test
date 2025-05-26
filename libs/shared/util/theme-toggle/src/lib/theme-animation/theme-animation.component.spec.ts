import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchThemeService } from '../switch-theme.service';
import { ThemeAnimationComponent } from './theme-animation.component';

jest.useFakeTimers();
describe('ThemeAnimationComponent', () => {
  let component: ThemeAnimationComponent;
  let fixture: ComponentFixture<ThemeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeAnimationComponent],
      providers: [SwitchThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle class list', () => {
    const service = TestBed.inject(SwitchThemeService);
    const document = TestBed.inject(DOCUMENT);

    jest.spyOn(document.documentElement.classList, 'add');
    jest.spyOn(document.documentElement.classList, 'remove');

    service.toggleTheme(); // Switch theme
    fixture.detectChanges();
    TestBed.flushEffects();

    jest.runAllTimers();

    expect(document.documentElement.classList.add).toHaveBeenCalledWith(
      'theme-animation'
    );
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      'theme-animation'
    );
  });
});
