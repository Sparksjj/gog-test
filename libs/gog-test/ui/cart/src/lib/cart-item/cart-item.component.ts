import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { CartStateService } from '@gog-test/cart-state';
import { CurrencyPipe } from '@gog-test/currency-pipe';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';

@Component({
  selector: '[lib-cart-item]',
  imports: [PictureLoaderDirective, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    ['tabIndex']: '0',
    '[class.deleting]': 'deleting()',
  },
})
export class CartItemComponent {
  private cartStateService = inject(CartStateService);
  private el = inject(ElementRef<HTMLParagraphElement>);
  private deleting = signal(false);

  item = input.required<GameModel>();

  removeItem(): void {
    this.el.nativeElement.addEventListener('transitionend', () => {
      this.cartStateService.removeItem(this.item());
    });
    this.deleting.set(true);
  }
}
