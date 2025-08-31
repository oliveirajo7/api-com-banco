import express from "express"
import { PrismaClient } from './generated/prisma'

const app = express();
const prisma = new PrismaClient()

app.use(express.json());

const usuarios = [];

app.post('/usuarios', async (req, res) => {

  await prisma.user.create({
    data: {
      nome: req.body.nome,
      email: req.body.email
    }
  })
 
  res.status(201).send('Deu certo');

});


app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});


app.listen(3000);
