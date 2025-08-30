import express from "express";

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('Lista de usuários');
});

app.listen(3000)
