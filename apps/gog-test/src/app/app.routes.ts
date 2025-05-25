import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@gog-test/shell').then(m => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@gog-test/main').then(m => m.MainComponent),
      },
    ],
  },
];
