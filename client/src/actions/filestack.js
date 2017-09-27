import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE,
} from '../constants/filestack';

const uploadPicture = () => ({ type: UPLOAD_PICTURE });
const uploadPictureSuccess = url => ({ type: UPLOAD_PICTURE_SUCCESS, url });
const uploadPictureFailure = error => ({ type: UPLOAD_PICTURE_FAILURE, error });

export { uploadPicture, uploadPictureSuccess, uploadPictureFailure };
