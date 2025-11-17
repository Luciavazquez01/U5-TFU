const express = require('express');
const router = express.Router();

router.post('/availabilityCheck', (req, res) => {
  const requestXml = req.body || '';
  console.log('SOAP request recibido:\n', requestXml);

  const responseXml = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <AvailabilityCheckResponse xmlns="http://ut5-tfu/quality">
          <ServiceName>UT5-TFU Monolith</ServiceName>
          <QualityAttribute>Disponibilidad</QualityAttribute>
          <Explanation>
            En la arquitectura monolítica todos los módulos (auth, usuarios,
            proyectos y tareas) se ejecutan en un único proceso y un único
            contenedor. Esto reduce la cantidad de puntos de fallo y elimina
            las dependencias de red entre servicios, lo que mejora la
            disponibilidad del sistema frente a la versión distribuida.
          </Explanation>
        </AvailabilityCheckResponse>
      </soap:Body>
    </soap:Envelope>
  `.trim();

  res.set('Content-Type', 'text/xml');
  res.send(responseXml);
});

module.exports = router;
