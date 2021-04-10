const express = require('express');
const bodyParser = require('body-parser');
const cocktailsRoutes = require('./routes/cocktailsList.js');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use('/cocktails', cocktailsRoutes);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

