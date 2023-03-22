import axios from 'axios';

export const usersDataApi = async () => {
  return await axios({
    url: 'https://ump-swift-backend-production-c0d4.up.railway.app/users',
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': 'https://main--stellular-maamoul-1bdee3.netlify.app/',
    },
  })
    .then(response => response.data)
    .catch(e => console.log('error in calling user data', e));
};
