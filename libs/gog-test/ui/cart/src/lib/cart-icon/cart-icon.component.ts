import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartStateService } from '@gog-test/cart-state';

@Component({
  selector: 'lib-cart-icon',
  imports: [],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent {
  cartItemsCount = inject(CartStateService).cartItemsCount;
}
