import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  output,
} from '@angular/core';
import { ButtonComponent } from '@gog-test/button';
import { CartStateService } from '@gog-test/cart-state';
import { WordEndingPipe } from '@gog-test/word-ending-pipe';

@Component({
  selector: '[lib-cart-sumary]',
  imports: [ButtonComponent, CurrencyPipe, WordEndingPipe],
  templateUrl: './cart-sumary.component.html',
  styleUrl: './cart-sumary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSumaryComponent {
  private cartStateService = inject(CartStateService);

  clearCart = output<void>();

  cartItemsCount = this.cartStateService.cartItemsCount;

  totalPrice = computed(() =>
    this.cartStateService.cartItems().reduce((acc, item) => {
      return acc + (item.prise ?? 0);
    }, 0)
  );

  onClearCart(): void {
    this.clearCart.emit();
  }
}
