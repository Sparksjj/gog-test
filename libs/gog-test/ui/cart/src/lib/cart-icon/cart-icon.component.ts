import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  OnDestroy,
  signal,
  untracked,
} from '@angular/core';
import { CartStateService } from '@gog-test/cart-state';

@Component({
  selector: 'lib-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent implements OnDestroy {
  showCart = input.required<boolean>();
  cartItemsCount = inject(CartStateService).cartItemsCount;

  filled = signal<boolean>(this.cartItemsCount() > 0);
  animated = signal<boolean>(this.cartItemsCount() > 0);

  private timeoutId?: ReturnType<typeof setTimeout>;

  private previousState: { count: number } = {
    count: this.cartItemsCount(),
  };

  constructor() {
    effect(() => {
      const count = this.cartItemsCount();
      const isCartShown = this.showCart();

      if (!isCartShown && count > this.previousState.count) {
        this.filled.set(true);
        this.animated.set(true);
        this.scheduleRestartAnimation();
      } else if (isCartShown) {
        this.filled.set(false);
      }

      this.previousState.count = count;
    });
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private scheduleRestartAnimation() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      untracked(() => {
        this.animated.set(false);
      });
    }, 600);
  }
}
