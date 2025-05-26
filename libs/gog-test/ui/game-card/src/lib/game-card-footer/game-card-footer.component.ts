import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CartStateService } from '@gog-test/cart-state';
import { ChipComponent } from '@gog-test/chip';
import { CurrencyPipe } from '@gog-test/currency-pipe';
import { DiscountPipe } from '@gog-test/discount-pipe';
import { GameModel } from '@gog-test/game-model';

@Component({
  selector: '[lib-game-card-footer]',
  imports: [ChipComponent, CurrencyPipe, DiscountPipe],
  templateUrl: './game-card-footer.component.html',
  styleUrl: './game-card-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardFooterComponent {
  private cartStateService = inject(CartStateService);
  item = input.required<GameModel>();

  isInCart = computed(() => {
    return this.cartStateService
      .cartItems()
      .some(cartItem => cartItem.id === this.item().id);
  });

  addToCart(): void {
    this.cartStateService.addItem(this.item());
  }
}
