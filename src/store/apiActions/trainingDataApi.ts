import axios from 'axios';
import { errorToast } from '../../common/Toast/toast';
import { config } from '../../App';

export const trainingDataApi = async () => {
  return await axios({
    url: config.endpoint + '/trainingInfo',
    method: 'get',
  })
    .then(response => response.data) // ADD toast
    .catch(e => {
      console.log('error in caaling user data', e);
      errorToast('Cannot Fetch Data from the Server');
    });
};
