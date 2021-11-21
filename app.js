const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Este es el primer cambio para integrar, este es el segundo cambio ya con pipeline implementando y este es el 3er commit'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
