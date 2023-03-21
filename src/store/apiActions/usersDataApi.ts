import axios from 'axios';

export const usersDataApi = async () => {
  return await axios
    .get('https://ump-swift-backend-production-c0d4.up.railway.app/users')
    .then(response => response.data)
    .catch(e => console.log('error in calling user data', e));
};
