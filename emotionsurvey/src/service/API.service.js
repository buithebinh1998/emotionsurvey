import axios from 'axios';
const requestConfig = (apiGateway) => ({
  baseURL: apiGateway,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const APIStaticObject = [];

export default (apiGateway) => {
    const request = axios.create(requestConfig(apiGateway));
  
    APIStaticObject.push(request);
  
    return request;
  };
  