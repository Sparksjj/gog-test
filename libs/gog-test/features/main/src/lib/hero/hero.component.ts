import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroBanerComponent } from '@gog-test/hero-baner';
import { HeroDataService } from '@gog-test/hero-data';
import { SwitchThemeService } from '@gog-test/theme-toggle';

@Component({
  selector: '[lib-hero]',
  imports: [HeroBanerComponent, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroDataService],
})
export class HeroComponent {
  private switchThemeService = inject(SwitchThemeService);

  title = 'Game of the week';

  hero$ = inject(HeroDataService).getHeroData();

  onPressSecretBtn(): void {
    this.switchThemeService.toggleTheme();
  }
}
