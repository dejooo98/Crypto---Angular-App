// import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
export const CRYPTOS_STATE_NAME = 'cryptos';
const getCryptosState = createFeatureSelector<AppState>(CRYPTOS_STATE_NAME);

export const getCryptos = createSelector(getCryptosState, (state) => {
  return state.cryptos;
});

// export const getPostById = createSelector(getPostsState, (state, props) => {
//   return state.posts.find((post) => post.id === props.id);
// });
