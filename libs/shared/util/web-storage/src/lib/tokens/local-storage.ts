import { isPlatformServer } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { storageMock } from '../mocks/storage-mock';

export const LOCAL_STORAGE = new InjectionToken<Storage>('Local Storage', {
  factory: () => {
    const platformId = inject(PLATFORM_ID);

    if (isPlatformServer(platformId)) {
      return storageMock;
    }
    return localStorage;
  },
});
