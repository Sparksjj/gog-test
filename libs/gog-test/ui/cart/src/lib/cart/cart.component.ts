import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CartIconComponent } from '../cart-icon/cart-icon.component';
import { CartPopoverComponent } from '../cart-popover/cart-popover.component';

@Component({
  selector: '[lib-cart]',
  imports: [CartIconComponent, CartPopoverComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  showCart = signal<boolean>(false);

  toggleCart() {
    this.showCart.update(current => !current);
  }
}
