import {appClient} from './axios';
export const getRequest = async (URL, payload) => {
  return appClient.get(`${URL}`, payload);
};
