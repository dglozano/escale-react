const dev = {
  api: {
    url: "https://localhost:443/api",
    timeout: 3000
  }
};

const prod = {
  api: {
    url: "https://escale.com.ar/api",
    timeout: 10000
  }
};

const config = process.env.REACT_APP_ENV === "prod" ? prod : dev;

export default {
  // Add common config values here
  ...config
};
