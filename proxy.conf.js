const PROXY_CONFIG = {
  "/api": {
    target: "http://localhost:8000",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("host", "localhost:8000");
      proxyReq.setHeader("origin", "http://localhost:8000");
    }
  }
};

module.exports = PROXY_CONFIG;
