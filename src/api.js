import axios from "axios";

const service = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/users"
});

const errHandler = err => {
  throw err.response.data;
};

export default {
  signup(userData) {
    return service
      .post(userData)
      .then(res => res.data)
      .catch(errHandler);
  }
};
