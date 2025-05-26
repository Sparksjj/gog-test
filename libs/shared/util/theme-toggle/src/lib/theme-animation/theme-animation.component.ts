/* eslint-disable max-len */
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';
import { SwitchThemeService } from '../switch-theme.service';

@Component({
  selector: '[libThemeAnimation]',
  template: `<ng-content></ng-content>`,
  styleUrl: './theme-animation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemeAnimationComponent {
  private theme = inject(SwitchThemeService).theme;

  private previosTheme = this.theme();

  constructor() {
    effect(() => {
      const newTheme = this.theme();
      if (this.previosTheme !== newTheme) {
        this.startAnimation();
      }

      this.previosTheme = newTheme;
    });
  }

  /**
   * Add and remove after timeout a class to the root element to set up transition for all backgroun-color changes.
   */
  private startAnimation(): void {
    const rootElement = document.documentElement;
    if (rootElement) {
      rootElement.classList.add('theme-animation');

      setTimeout(() => {
        rootElement.classList.remove('theme-animation');
      }, 800);
    }
  }
}
