import axios from 'axios';

export const usersDataApi = async () => {
  return await axios
    .get('/users')
    .then(response => response.data)
    .catch(e => console.log('error in calling user data', e));
};
