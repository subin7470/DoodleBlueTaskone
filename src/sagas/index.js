import {all, takeLatest} from 'redux-saga/effects';
import {getAssociatesList} from '../slices/associates.slices';
import {GetAssociatesListSaga} from './associates.saga';
export default function* watch() {
  yield all([takeLatest(getAssociatesList.type, GetAssociatesListSaga)]);
}
