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

  private get itemsInCartHtmlEl(): HTMLElement {
    return this.el.nativeElement.querySelector('#items-in-cart');
  }

  private clearFunction = (() => {
    this.cartStateService.clearCart();
    this.itemsInCartHtmlEl?.removeEventListener(
      'transitionend',
      this.clearFunction
    );
    this.deleting.set(false);
  }).bind(this);

  clearCart() {
    this.itemsInCartHtmlEl?.addEventListener(
      'transitionend',
      this.clearFunction
    );

    this.deleting.set(true);
  }
}
