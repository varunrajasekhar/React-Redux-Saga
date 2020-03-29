import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { searchMovieInputChange } from '../actions';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=474c66cc807b4ac699cb158cd898d8f2')
    .then(response => response.json());
    console.log(json);

  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* clickNews() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([ 
    clickNews()
  ]);
}