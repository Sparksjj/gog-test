import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { PICTURE_LOADER_CONFIG } from './configs';

@Directive({
  selector: '[libPictureLoader], lib-picture-loader',
})
export class PictureLoaderDirective {
  private readonly config = inject(PICTURE_LOADER_CONFIG);

  path = input.required<string>({ alias: 'libPictureLoader' });

  alt = input.required<string>();

  width = input.required<number>();

  height = input.required<number>();

  formats = input<string[]>(this.config.formats);

  get defaultFormat(): string {
    return this.formats()[this.formats().length - 1];
  }

  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.createPicture();
    });
  }

  // it should be more complex (retina and difrent sizes), but for test app it's enough
  private createPicture(): void {
    const picture = document.createElement('picture');

    this.formats().forEach(format => {
      const source = document.createElement('source');
      source.srcset = `${this.path()}.${format}`;
      source.type = `image/${format}`;
      picture.appendChild(source);
    });

    const img = document.createElement('img');
    img.src = `${this.path()}.${this.defaultFormat}`;
    img.alt = this.alt();
    img.width = this.width();
    img.height = this.height();

    picture.appendChild(img);

    this.el.nativeElement.appendChild(picture);
  }
}
