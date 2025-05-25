import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GameCardComponent } from '@gog-test/game-card';
import { ProductsDataService } from '@gog-test/products-data';

@Component({
  selector: '[lib-products-section]',
  imports: [AsyncPipe, GameCardComponent],
  providers: [ProductsDataService],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSectionComponent {
  items$ = inject(ProductsDataService).getProductsData();
}
