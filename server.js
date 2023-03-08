const express = require('express');
const router = require("./routes");
const path = require('path');
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(('/'), router);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
  