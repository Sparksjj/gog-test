import { Injectable } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { MOCK_PRODUCTS } from '@gog-test/mock-products';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsDataService {
  getProductsData(): Observable<GameModel[]> {
    return of(MOCK_PRODUCTS);
  }
}
