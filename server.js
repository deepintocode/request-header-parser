const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('A request header parser microservice');
});

app.get('/api/whoami', (req, res) => {
  let ip = req.ip;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  res.json({
    "ipaddress": ip,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  });
});

app.listen(process.env.PORT | 3000, () => console.log('The server is listening at port 3000'));