import axios from "axios";
import config from "./config.js";

class EscaleClient {
  api = axios.create({
    baseURL: config.api.url,
    timeout: config.api.timeout
  });

  sendLoginCredentials(email, password) {
    return this.api.post("/auth/login", {
      email: email,
      password: password
    });
  }
}

export const client = new EscaleClient();
