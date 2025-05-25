import { Injectable } from '@angular/core';
import { GameModel } from '@gog-test/game-model';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroDataService {
  getHeroData(): Observable<GameModel> {
    return of(MOCK_HERO);
  }
}
