import axios from 'axios';

const appClient = axios.create();
const baseURL = 'https://mobilestg3.u.com.my/cms-message-mgt/';

appClient.defaults.baseURL = baseURL;
appClient.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
appClient.defaults.timeout = 10000;
appClient.defaults.withCredentials = true;
export {appClient};
