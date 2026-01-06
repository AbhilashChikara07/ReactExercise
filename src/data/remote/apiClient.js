// src/data/remote/apiClient.js
import axios from "axios";
import { attachInterceptors } from "./apiInterceptor";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

attachInterceptors(apiClient);

export default apiClient;