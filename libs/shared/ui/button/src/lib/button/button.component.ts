import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[lib-button]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"text-l"',
  },
})
export class ButtonComponent {}
