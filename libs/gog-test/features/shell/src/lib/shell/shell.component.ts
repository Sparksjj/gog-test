import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'lib-shell',
  imports: [NavComponent, ContentComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
