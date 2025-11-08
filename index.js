const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const email = "dhina@gmail.com";
const pass = "@123";

app.post("/login", (req, res) => {
  if (req.body.email === email && req.body.password === pass)
    res.send(true);
  else
    res.send(false);
});

app.listen(5000, () => {
  console.log(`✅ Server running on port 5000.....`);
});
