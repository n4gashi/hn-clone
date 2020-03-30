import axios from 'axios';

class Api {
  static BASE_URL = "https://hacker-news.firebaseio.com/v0";
  static getMaxItemId() {
    return axios.get(`${this.BASE_URL}/maxitem.json`)
  }
  static getTopStories() {
    return axios.get(`${this.BASE_URL}/topstories.json`)
  }
  static getItem(itemId) {
    return axios.get(`${this.BASE_URL}/item/${itemId}.json`)
  }
}

export default Api;
