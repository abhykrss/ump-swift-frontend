import axios from 'axios';
export const trainingDataApi = async () => {
  return await axios
    .get('https://ump-swift-backend-production-c0d4.up.railway.app/trainingInfo')
    .then(response => response.data) // ADD toast
    .catch(e => console.log('error in caaling user data', e));
};
