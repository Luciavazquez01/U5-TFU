const TOKEN_DEMO = "token-demo-u5-tfu";

exports.login = (username, password) => {
  if (username === "demo" && password === "demo") {
    return TOKEN_DEMO;
  }
  return null;
};

exports.validateToken = (token) => {
  return token === TOKEN_DEMO;
};
