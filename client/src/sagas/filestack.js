import { takeLatest, put, call } from 'redux-saga/effects';

import { UPLOAD_PICTURE } from '../constants/filestack';
import {
  uploadPictureSuccess,
  uploadPictureFailure,
} from '../actions/filestack.js';

import { uploadPicture as pick } from '../api';

function* uploadPicture() {
  try {
    const url = yield call(pick);
    yield put(uploadPictureSuccess(url));
  } catch (error) {
    yield put(uploadPictureFailure(error));
  }
}

function* watchUploadPicture() {
  yield takeLatest(UPLOAD_PICTURE, uploadPicture);
}

export { watchUploadPicture };
