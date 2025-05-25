import { inject, Injectable } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { LOCAL_STORAGE } from '@gog-test/web-storage';
import { Observable, of } from 'rxjs';

@Injectable()
export class CartDataService {
  private storage = inject(LOCAL_STORAGE);

  getItems(): Observable<GameModel[]> {
    let items: GameModel[] = [];

    try {
      items = JSON.parse(this.storage.getItem('cart') || '[]');
    } catch (e) {
      console.error('Error parsing cart data from localStorage', e);
    }

    return of(items);
  }

  saveItems(items: GameModel[]): Observable<void> {
    try {
      this.storage.setItem('cart', JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart data to localStorage', e);
    }

    return of();
  }
}
