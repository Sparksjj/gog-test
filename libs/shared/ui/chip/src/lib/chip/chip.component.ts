import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type Appearance = 'outline' | 'primary';

@Component({
  selector: 'lib-chip, [lib-chip]',
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '[appearance(), "text-m"]',
  },
})
export class ChipComponent {
  appearance = input<Appearance>('primary');
}
