import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allTheStuff = response.data;
      const stuff = [];
      if (allTheStuff) {
        Object.keys(allTheStuff).forEach((item) => {
          allTheStuff[item].id = item;
          stuff.push(allTheStuff[item]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => reject(err));
});

export default { getStuffByUid };
