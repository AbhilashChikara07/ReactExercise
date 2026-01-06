// src/data/remote/apiInterceptor.js
export const attachInterceptors = (client) => {
    client.interceptors.request.use((config) => {
        console.log("➡️", config.method?.toUpperCase(), config.url);
        return config;
    });

    client.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error("❌ API Error:", error);
            return Promise.reject(error);
        }
    );
};