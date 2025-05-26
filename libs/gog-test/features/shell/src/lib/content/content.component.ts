import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeAnimationComponent } from '@gog-test/theme-toggle';

@Component({
  selector: '[lib-content]',
  imports: [RouterModule, ThemeAnimationComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
