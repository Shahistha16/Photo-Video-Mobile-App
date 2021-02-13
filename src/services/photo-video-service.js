import {ApiMethods, ApiPaths} from './api-constants';
import {ApiRequest} from './api-request';

/** static data
 * url: 'https://jsonkeeper.com/b/A6OY',
 * make BASE_URL as Empty
 */

function getPhotosList(pageSize, page, onSuccess, onFailure) {
  ApiRequest({
    url: ApiPaths.PHOTOS,
    method: ApiMethods.GET,
    params: {pageSize, page},
  }).then(
    (response) => {
      onSuccess(response);
    },
    (error) => {
      onFailure(error.response);
    },
  );
}

function getVideoList(pageSize, page, onSuccess, onFailure) {
  ApiRequest({
    url: ApiPaths.VIDEOS,
    method: ApiMethods.GET,
    params: {pageSize, page},
  }).then(
    (response) => {
      onSuccess(response);
    },
    (error) => {
      onFailure(error.response);
    },
  );
}

export const photoVideoService = {
  getPhotosList,
  getVideoList,
};
