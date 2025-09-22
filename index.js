import express from 'express';
import rotaCurso from './Routes/rotaCurso.js';
import cors from 'cors';

const hostname = '0.0.0.0';
const port = 4000;
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use("/cursos", rotaCurso);

// Inicia o servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});
