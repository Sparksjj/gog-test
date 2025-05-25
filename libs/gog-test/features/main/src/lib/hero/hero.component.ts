import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroBanerComponent } from '@gog-test/hero-baner';
import { HeroDataService } from '@gog-test/hero-data';

@Component({
  selector: '[lib-hero]',
  imports: [HeroBanerComponent, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroDataService],
})
export class HeroComponent {
  title = 'Game of the week';

  hero$ = inject(HeroDataService).getHeroData();
}
