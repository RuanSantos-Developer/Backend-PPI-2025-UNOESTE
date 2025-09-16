import Cursos from './models/cursos.js';

const curso1 = new Cursos("Python", "Curso de Python", 200.00, "8 meses")

await curso1.gravar()
console.log(curso1.toString())
console.log(curso1.toJSON())