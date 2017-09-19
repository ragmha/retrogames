import { watchGetGames } from './games.js';

export default function* rootSaga() {
  yield [watchGetGames()]; // starting all the sagas in parallel
}
