import {call, put} from 'redux-saga/effects';
import {endPoints, getRequest} from '../api';
import {
  updateAssociatesListFromAPI,
  updatePageDetails,
} from '../slices/associates.slices';
export function* GetAssociatesListSaga(action) {
  try {
    const response = yield call(
      getRequest,
      endPoints.GET_ASSOCIATES_LIST +
        `?page=${action.payload.params.page}&lang_id=1`,
    );
    if (response?.status == 200) {
      action.payload.callback(true, response?.data?.data);
      yield put(updateAssociatesListFromAPI(response?.data?.data?.list));
      yield put(updatePageDetails(response?.data?.data?.pageMeta));
    } else {
      action.payload.callback(false);
    }
  } catch (e) {
    console.log('API ERROR!!!', e);
    action.payload.callback(false);
  }
}
