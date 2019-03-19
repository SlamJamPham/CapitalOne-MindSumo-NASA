/* eslint-disable linebreak-style */
const API_URL = 'https://images-api.nasa.gov/search?q=';

export default {
  search(info) {
    const url = `${API_URL}${info[0]}&location=${info[1]}&year_start=${info[2]}&year_end=${info[3]}&keywords=${info[4]}&media_type=image`;
    return fetch(url)
      .then(response => response.json())
      .then(result => result.collection.items);
  },
};
