/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

export const storageMock: Storage = {
  length: 0,
  clear: () => {},
  getItem: (key: string): string | null => null,
  key: (index: number): string | null => null,
  removeItem: (key: string): void => {},
  setItem: (key: string, value: string): void => {},
};
