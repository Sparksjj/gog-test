import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartComponent } from '@gog-test/cart';
import { CartDataService } from '@gog-test/cart-data';
import { CartDataSyncDirective } from '../cart-data-sync/cart-data-sync.directive';

@Component({
  selector: '[lib-nav]',
  imports: [CartComponent, CartDataSyncDirective],
  providers: [CartDataService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
