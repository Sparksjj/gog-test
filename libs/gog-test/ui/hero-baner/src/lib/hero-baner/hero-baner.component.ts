import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';

@Component({
  selector: '[lib-hero-baner]',
  imports: [PictureLoaderDirective],
  templateUrl: './hero-baner.component.html',
  styleUrl: './hero-baner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanerComponent {
  item = input.required<GameModel>();
}
