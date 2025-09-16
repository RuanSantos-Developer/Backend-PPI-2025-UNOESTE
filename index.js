import express from 'express';
import rotaCurso from './Routes/rotaCurso.js';

const hostname = '0.0.0.0';
const port = 4000;
const app = express();

app.use(express.json());
app.use("/cursos", rotaCurso);

// Inicia o servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});
