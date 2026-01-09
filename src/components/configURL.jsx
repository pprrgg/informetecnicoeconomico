const configURL = {
      API_URL:
        process.env.NODE_ENV === "development"
          // ? "http://localhost:8888"
          ? "http://192.168.1.135:8888"
          : "https://doctec.duckdns.org/fast",
    };
    
    export default configURL;