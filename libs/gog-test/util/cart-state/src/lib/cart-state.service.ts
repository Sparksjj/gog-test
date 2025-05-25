import { computed, Injectable, signal } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  isNeedToSync$ = new Subject<boolean>();

  get cartItems() {
    return this._cartItems.asReadonly();
  }

  cartItemsCount = computed(() => this.cartItems().length);

  private _cartItems = signal<GameModel[]>([]);

  resetCart(items: GameModel[], needSync = true): void {
    this._cartItems.set(items);
    this.checkIsNeedToSync(needSync);
  }

  addItem(item: GameModel, needSync = true): void {
    const currentItems = this.cartItems();
    if (!this.hasItem(item)) {
      this._cartItems.set([...currentItems, item]);
      this.checkIsNeedToSync(needSync);
    }
  }

  removeItem(item: GameModel, needSync = true): void {
    const updatedItems = this.cartItems().filter(
      cartItem => cartItem.id !== item.id
    );
    this._cartItems.set(updatedItems);
    this.checkIsNeedToSync(needSync);
  }

  clearCart(needSync = true): void {
    this._cartItems.set([]);
    this.checkIsNeedToSync(needSync);
  }

  hasItem(item: GameModel): boolean {
    return this._cartItems().some(cartItem => cartItem.id === item.id);
  }

  private checkIsNeedToSync(needSync: boolean): void {
    if (needSync) {
      this.isNeedToSync$.next(true);
    }
  }
}
