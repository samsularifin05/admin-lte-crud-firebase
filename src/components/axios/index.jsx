import { getItem, Axios, ServerBe } from "components";

export function postData(endpoint, data) {
  let config = {
    headers: {
      Authorization: `Bearer ${getItem("userdata").access_token}`
    }
  };
  return new Promise((resolve, reject) => {
    Axios.post(ServerBe + endpoint, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getData(endpoint, params) {
  let config = {
    headers: {
      Authorization: `Bearer ${getItem("userdata").access_token}`
    },
    params: params
  };

  return new Promise((resolve, reject) => {
    Axios.get(ServerBe + endpoint, config)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteData(endpoint, data) {
  let hasil = {
    data: data,
    headers: { Authorization: `Bearer ${getItem("userdata").access_token}` }
  };
  return new Promise((resolve, reject) => {
    Axios.delete(ServerBe + endpoint, hasil)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function putData(endpoint, data) {
  let config = {
    headers: {
      Authorization: `Bearer ${getItem("userdata").access_token}`
    }
  };
  return new Promise((resolve, reject) => {
    Axios.put(ServerBe + endpoint, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const uploadFile = (endpoint, data) => {
  let config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata").access_token}`,
      "Content-Type": "multipart/form-data"
    }
  };
  return new Promise((resolve, reject) => {
    Axios.post(ServerBe + endpoint, data, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
  
};
