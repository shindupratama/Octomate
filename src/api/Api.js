import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://dev.octomate.us/api/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  async saveToken(token) {
    try {
      await AsyncStorage.setItem('@Octomate:token', JSON.stringify(token));
      return true;
    } catch (error) {
      return false;
    }
  }

  async getToken() {
    try {
      let response = await AsyncStorage.getItem('@Octomate:token');
      let token = JSON.parse(response);
      return token;
    } catch (error) {
      return null;
    }
  }

  setToken(token) {
    this.api.defaults.headers.common['X-AUTH-TOKEN'] = token;
  }

  async deleteToken() {
    try {
      this.api.defaults.headers.common['X-AUTH-TOKEN'] = '';
      return await AsyncStorage.removeItem('@Octomate:token');
    } catch (error) {
      return false;
    }
  }

  login = (email, password) => {
    return this.api.post('/login/email', {
      email: email,
      password: password
    });
  }

  async logout() {
    this.token = await this.getToken();
    if (this.token !== null) {
      this.setToken(this.token);
      return this.api.post('/logout');
    }
  }

  getAddress(lat, lng) {
    return axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
  }

  async testAnnouncement() {
    this.token = await this.getToken();
    if (this.token !== null) {
      this.setToken(this.token);
      // return this.api.get('/testannouncement');
      return this.api.get('/reminder');
      // return this.api.get('/timesheet');
      // return this.api.get('/claim');
    }
  }
  
}

export default Api;