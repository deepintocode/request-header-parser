const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.json({
  //   "ipaddress": req.ip,
  //   "language": req.acceptsLanguages().join(',')
  // })
  res.send(req.headers)
});

app.listen(process.env.PORT || 3000, () => console.log('The server is listening at port 3000'));