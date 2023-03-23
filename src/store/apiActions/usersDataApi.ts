import axios from 'axios';
import { errorToast } from '../../common/Toast/toast';
import { config } from '../../App';

export const usersDataApi = async () => {
  return await axios({
    url: config.endpoint + '/users',
    method: 'get',
  })
    .then(response => response.data)
    .catch(e => {
      console.log('error in calling user data', e);
    });
};
