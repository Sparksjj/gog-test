import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchThemeService } from '@gog-test/theme-toggle';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [
        {
          provide: SwitchThemeService,
          useValue: {
            toggleTheme: () => {
              // Mock implementation of toggleThem
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Game of the week"', () => {
    expect(component.title).toBe('Game of the week');
  });

  it('should call toggleTheme on SwitchThemeService when onPressSecretBtn is called', () => {
    const switchThemeService = TestBed.inject(SwitchThemeService);
    jest.spyOn(switchThemeService, 'toggleTheme');

    component.onPressSecretBtn();

    expect(switchThemeService.toggleTheme).toHaveBeenCalled();
  });
});
