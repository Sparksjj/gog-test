import { GameModel } from '@gog-test/game-model';

export const MOCK_PRODUCTS: GameModel[] = [
  {
    id: 2,
    name: 'Oddworld: stranger’swrath',
    price: 9.99,
    discount: 50,
    isOwned: false,
    imagesPath: 'assets/images/oddworld/img',
  },
  {
    id: 3,
    name: 'Chaos on deponia',
    price: 49.99,
    discount: 10,
    isOwned: true,
    imagesPath: 'assets/images/chaos-on-deponia/img',
  },
  {
    id: 4,
    name: 'The settlers 2: gold edition',
    price: 5.99,
    discount: 0,
    isOwned: false,
    imagesPath: 'assets/images/the-settlers-2/img',
  },
  {
    id: 5,
    name: 'Neverwinter nights',
    price: 9.99,
    discount: 50,
    isOwned: false,
    imagesPath: 'assets/images/neverwinter/img',
  },
  {
    id: 6,
    name: 'Assassin’s creed: director’s cut',
    price: 9.99,
    discount: 0,
    isOwned: false,
    imagesPath: 'assets/images/assassins-creed/img',
  },
];
