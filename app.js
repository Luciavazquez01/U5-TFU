const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./src/modules/auth/auth.routes');
const soapRoutes = require('./src/soap/soap.routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/xml' })); 

app.use('/auth', authRoutes);

app.use('/soap', soapRoutes);

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'u5-tfu monolith',
    message: 'Servidor corriendo correctamente dentro de un solo proceso'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor monolítico escuchando en http://localhost:${3000}`);
});
