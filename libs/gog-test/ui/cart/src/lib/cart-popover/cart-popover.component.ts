import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { CartStateService } from '@gog-test/cart-state';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartSumaryComponent } from '../cart-sumary/cart-sumary.component';

@Component({
  selector: 'lib-cart-popover',
  imports: [CartSumaryComponent, CartItemComponent],
  templateUrl: './cart-popover.component.html',
  styleUrl: './cart-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPopoverComponent {
  private cartStateService = inject(CartStateService);
  private el = inject(ElementRef<HTMLElement>);
  items = this.cartStateService.cartItems;
  deleting = signal(false);

  clearCart() {
    this.el.nativeElement
      .querySelector('#items-in-cart')
      .addEventListener('transitionend', () => {
        this.cartStateService.clearCart();
      });

    this.deleting.set(true);
  }
}
