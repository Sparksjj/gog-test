import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  viewChildren,
} from '@angular/core';
import { ButtonComponent } from '@gog-test/button';
import { CartStateService } from '@gog-test/cart-state';
import { ChipComponent } from '@gog-test/chip';
import { CurrencyPipe } from '@gog-test/currency-pipe';
import { DiscountPipe } from '@gog-test/discount-pipe';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';

@Component({
  selector: 'lib-game-card',
  imports: [
    PictureLoaderDirective,
    ChipComponent,
    ButtonComponent,
    CurrencyPipe,
    DiscountPipe,
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[tabindex]': '0',
  },
})
export class GameCardComponent {
  private price = viewChildren('price', {
    read: ElementRef,
  });

  private cartStateService = inject(CartStateService);

  item = input.required<GameModel>();

  isInCart = computed(() => {
    return this.cartStateService
      .cartItems()
      .some(cartItem => cartItem.id === this.item().id);
  });

  sicretAnimationStart(): void {
    console.log(this.price());
    this.modify();
  }

  modify() {
    const cl = this.price()[0].nativeElement.classList;
    const n = Math.random() > 0.5;
    setTimeout(() => {
      cl.remove('increment');
      cl.remove('decrement');
    }, 1000);
    const targetClass = 'decrement';
    console.log(targetClass);

    cl.add(targetClass);
  }

  addToCart(): void {
    this.cartStateService.addItem(this.item());
  }
}
