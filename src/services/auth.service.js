import axios from "axios";

// const API_URL = 'https://java-api.codeboxxtest.xyz/authenticate?';
const API_URL =
  "https://java-api.codeboxxtest.xyz/authenticate?email=customer1%40business.com&password=password123";

class AuthService {
  login(username, password) {
    return axios.request(API_URL).then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      if (response.data.access_token !== null) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
