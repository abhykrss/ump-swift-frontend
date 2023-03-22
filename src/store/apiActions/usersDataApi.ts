import axios from 'axios';
import { errorToast } from '../../common/Toast/toast';

export const usersDataApi = async () => {
  return await axios({
    url: '/users',
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': 'https://main--stellular-maamoul-1bdee3.netlify.app/',
    },
  })
    .then(response => response.data)
    .catch(e => {
      console.log('error in calling user data', e);
      errorToast(e.message);
    });
};
