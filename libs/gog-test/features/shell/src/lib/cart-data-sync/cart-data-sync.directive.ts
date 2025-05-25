import { Directive, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartDataService } from '@gog-test/cart-data';
import { CartStateService } from '@gog-test/cart-state';
import { debounceTime, switchMap } from 'rxjs';

@Directive({
  selector: '[lib-cart-data-sync]',
})
export class CartDataSyncComponent implements OnInit {
  private cartStateService = inject(CartStateService);
  private cartDataService = inject(CartDataService);

  constructor() {
    this.cartStateService.isNeedToSync$
      .pipe(
        takeUntilDestroyed(),
        debounceTime(500),
        switchMap(() =>
          this.cartDataService.saveItems(this.cartStateService.cartItems())
        )
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems(): void {
    this.cartDataService.getItems().subscribe(items => {
      this.cartStateService.resetCart(items, false);
    });
  }
}
