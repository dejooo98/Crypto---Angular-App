import { Coin } from './../models/crypto.model';

export interface AppState {
  coins: ReadonlyArray<Coin>;
  collection: ReadonlyArray<string>;
}
