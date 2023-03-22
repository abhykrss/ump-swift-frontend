import axios from 'axios';
export const trainingDataApi = async () => {
  return await axios({
    url: '/trainingInfo',
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': 'https://main--stellular-maamoul-1bdee3.netlify.app/',
    },
  })
    .then(response => response.data) // ADD toast
    .catch(e => console.log('error in caaling user data', e));
};
