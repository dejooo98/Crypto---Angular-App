// import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
export const CRYPTOS_STATE_NAME = 'cryptos';
const getCryptosState = createFeatureSelector<AppState>(CRYPTOS_STATE_NAME);

export const getCryptos = createSelector(getCryptosState, (state) => {
  return state.cryptos;
});

// export const getCryptosById = createSelector(getCryptosState, (state) => {
//   return state.cryptos.find((crypto) => crypto.id === props.id);
// });
