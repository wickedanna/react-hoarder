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

const addItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

export default {
  getStuffByUid,
  getSingleItem,
  addItem,
  deleteItem,
};
