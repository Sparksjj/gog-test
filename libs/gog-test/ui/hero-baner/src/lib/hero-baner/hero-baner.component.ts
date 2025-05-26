import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { PictureLoaderDirective } from '@gog-test/picture-loader';

@Component({
  selector: '[lib-hero-baner]',
  imports: [PictureLoaderDirective],
  templateUrl: './hero-baner.component.html',
  styleUrl: './hero-baner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanerComponent {
  private block = viewChild('skeleton', { read: ElementRef });
  private currentBanerWidth = signal(1060);
  // this proportions should be in injection token, but for simplicity we use hardcoded values
  private readonly heroRatio = 370 / 1060;

  item = input.required<GameModel>();

  banerHeight = computed(() => {
    const width = this.currentBanerWidth() || 1060;
    return width * this.heroRatio;
  });

  ngOnInit(): void {
    this.currentBanerWidth.set(this.block()?.nativeElement?.clientWidth);
  }

  @HostListener('window:resize')
  onResize(): void {
    const width = this.block()?.nativeElement?.clientWidth || 1060;
    this.currentBanerWidth.set(width);
  }
}
