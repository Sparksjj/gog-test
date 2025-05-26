import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ButtonComponent } from '@gog-test/button';
import { CartStateService } from '@gog-test/cart-state';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';
import { GameCardFooterComponent } from '../game-card-footer/game-card-footer.component';

@Component({
  selector: 'lib-game-card',
  imports: [PictureLoaderDirective, ButtonComponent, GameCardFooterComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[tabindex]': '0',
  },
})
export class GameCardComponent {
  private cartStateService = inject(CartStateService);

  item = input.required<GameModel>();

  isShowBackdrop = computed(() => {
    return (
      !this.item().isOwned &&
      !this.cartStateService
        .cartItems()
        .some(cartItem => cartItem.id === this.item().id)
    );
  });

  addToCart(): void {
    this.cartStateService.addItem(this.item());
  }
}
