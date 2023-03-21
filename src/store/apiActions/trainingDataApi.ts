import axios from 'axios';
export const trainingDataApi = async () => {
  return await axios
    .get('/trainingInfo')
    .then(response => response.data) // ADD toast
    .catch(e => console.log('error in caaling user data', e));
};
