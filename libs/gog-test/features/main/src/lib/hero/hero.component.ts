import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroBanerComponent } from '@gog-test/hero-baner';
import { HeroDataService } from '@gog-test/hero-data';
import { throttleTime } from 'rxjs';

@Component({
  selector: '[lib-hero]',
  imports: [HeroBanerComponent, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroDataService],
})
export class HeroComponent {
  readonly heroRatio = 370 / 1060;

  title = 'Game of the week';

  hero$ = inject(HeroDataService).getHeroData().pipe(throttleTime(5000));
}
