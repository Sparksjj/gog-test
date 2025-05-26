import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';
import { GameCardFooterComponent } from '../game-card-footer/game-card-footer.component';

@Component({
  selector: '[lib-game-card]',
  imports: [PictureLoaderDirective, GameCardFooterComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  item = input.required<GameModel>();
}
