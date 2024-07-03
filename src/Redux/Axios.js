import axios from "axios";

const instance = axios.create({
    baseURL: "https://fuzzy-xylophone-qxvj7x557pw2xjvw-8787.app.github.dev",
    withCredentials: true,
});

export default instance;
