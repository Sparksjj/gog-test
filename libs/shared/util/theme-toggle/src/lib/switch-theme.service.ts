import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { ThemesType } from './models';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {
  get theme() {
    return this._theme.asReadonly();
  }

  private _theme = signal<ThemesType>('light');
  private _document = inject(DOCUMENT);

  toggleTheme(): void {
    this._theme.set(this.theme() === 'dark' ? 'light' : 'dark');
    this.startThemToggleAnimation();
  }

  private startThemToggleAnimation(): void {
    if (!this._document.startViewTransition) {
      this.applyThemeToRoot();
    } else {
      this._document.startViewTransition(this.applyThemeToRoot.bind(this));
    }
  }

  private applyThemeToRoot(): void {
    const theme = this._theme();

    const rootElement = this._document.documentElement;
    rootElement.classList.remove('dark', 'light');
    if (theme) {
      rootElement.classList.add(theme);
    }
  }
}
