import {Router} from 'express';
import CursosController from '../controlers/cursoController.js';

const rotaCurso = Router();
const cursoctrl = new CursosController();

rotaCurso.get("/", cursoctrl.consultar)
.get("/:nome", cursoctrl.consultar)
.post("/", cursoctrl.gravar)
.put("/:nome", cursoctrl.atualizar)
.delete("/:nome",  cursoctrl.deletar);

export default rotaCurso;