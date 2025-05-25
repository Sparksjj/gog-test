import { InjectionToken } from '@angular/core';
import { PictureLoaderConfig } from '../models';

export const PICTURE_LOADER_CONFIG = new InjectionToken<PictureLoaderConfig>(
  'Config for PictureLoaderDirective',
  {
    factory: () => ({
      formats: ['avif', 'webp', 'png'],
      // sizes: [432, 768, 1024],
      // breakpoints: [0, 768, 1024],
    }),
  }
);
