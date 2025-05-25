import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProductsSectionComponent } from '../products-section/products-section.component';

@Component({
  selector: 'lib-main',
  imports: [HeroComponent, ProductsSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
