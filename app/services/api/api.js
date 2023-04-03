import axios from 'axios';
import {navigationContainerRef} from '../../utils/navigation';
import {getAuthToken, setAuthToken} from '../../utils/token';

// const {BASE_URL} = getEnv();

let redirected = false;
const api = axios.create({
  // baseURL: 'https://judy-app.onrender.com/api/v1',
  baseURL: 'https://randomuser.me/api',
  //   timeout: 1000,
  // headers: new Headers( {
  //    'Content-Type': 'application/json',
  //  'Authorization': 'Bearer' }),
});

// Add a request interceptor
api.interceptors.request.use(
  async config => {
    // Get token from localStorage
    let token = await getAuthToken();
    // If token is present add it to request's Authorization Header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Add request/response interceptor
api.interceptors.response.use(
  response => {
    redirected = false;
    return response;
  },
  error => {
    const {response} = error;

    if (response && response.status === 401) {
      setAuthToken(null);
      // console.log('=====401',{response:response?.config});
      //log user out
      //handle session expiration
      const routes = navigationContainerRef.current?.getRootState();
      const currentRoute = routes?.routes?.[routes?.routes?.length - 1];
      // console.log('=====',{routes,currentRoute});
      if (!['Auth', 'AppSelect'].includes(currentRoute?.name)) {
        if (!redirected) {
          navigationContainerRef.current?.reset({
            index: 0,
            routes: [{name: 'Auth', screen: 'SignIn'}],
          });
          redirected = true;
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
