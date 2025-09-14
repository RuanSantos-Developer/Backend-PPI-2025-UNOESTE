import Cursos from './models/cursos.js';

const curso1 = new Cursos("JavaScript", "Curso de JavaScript", 150.00, "3 meses")

await curso1.gravar()
console.log(curso1.toString())
console.log(curso1.toJSON())