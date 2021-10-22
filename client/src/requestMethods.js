import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzEwZjFmNjZmYzVlNTliOTgxOTE0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDgzNjI4MywiZXhwIjoxNjM1MDk1NDgzfQ.ikbFfp72rz2MnoKz8xMSElNhBLmLN_p1lcMTD1tESQY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
