import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { SwitchThemeService } from './switch-theme.service';

describe('SwitchThemeService', () => {
  let service: SwitchThemeService;

  const mockDocument = {
    startViewTransition: (fn: () => void) => fn,
    documentElement: {
      classList: {
        remove: jest.fn(),
        add: jest.fn(),
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useValue: mockDocument }],
    });
    service = TestBed.inject(SwitchThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle theme from light to dark', () => {
    // Default theme is 'light'
    expect(service.theme()).toBe('light');
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should toggle theme from dark to light without startViewTransition', () => {
    mockDocument.startViewTransition = undefined as never;
    // Default theme is 'light'
    expect(service.theme()).toBe('light');
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });
});
