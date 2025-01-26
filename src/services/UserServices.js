import axios from "./customize-axios";

function fetchAllUser(page) {
  return axios.get(`/api/users?page=${page}`);
}

function postCreateUser(name, job) {
  return axios.post("/api/users", { name, job });
}

function putUpdateUser(name, job) {
  return axios.put("/api/users/2", { name, job });
}

export { postCreateUser, fetchAllUser, putUpdateUser };
