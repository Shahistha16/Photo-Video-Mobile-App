/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable func-names */

import { BaseAxiosInstance } from './axios';

/**
 * Request Wrapper with default success/error actions
 */
export const ApiRequest = async function (options) {
  const onSuccess = function (response) {
    if (response && response.status === 'ok') {
      return Promise.resolve(response);
    } else {
      return Promise.resolve(response);
    }
  };

  const onError = function (error) {
    return Promise.reject(error);
  };

  try {
    const response = await BaseAxiosInstance(options);
    console.log('******response pass*****', response);
    return onSuccess(response);
  } catch (error) {
    console.log('******response fail*****', error.response);
    return onError(error);
  }
};
