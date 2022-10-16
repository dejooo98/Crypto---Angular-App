import { Coin } from './../models/crypto.model';

export interface AppState {
  books: ReadonlyArray<Coin>;
  collection: ReadonlyArray<string>;
}
