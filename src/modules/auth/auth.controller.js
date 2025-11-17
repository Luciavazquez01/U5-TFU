const service = require('./auth.service');

exports.login = (req, res) => {
  const { username, password } = req.body;

  const token = service.login(username, password);

  if (!token) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  res.json({ token });
};

exports.validateToken = (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  const valid = service.validateToken(token);

  res.json({ valid });
};
