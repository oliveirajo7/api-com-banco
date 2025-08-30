import express from "express";

const app = express();
app.use(express.json());

const usuarios = [];

app.post('/usuarios', (req, res) => {

  usuarios.push(req.body);

  res.status(201).send('Deu certo');

});


app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});


app.listen(3000);
