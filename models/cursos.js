import CursoDAO from "../DB/cursosDAO.js"

export default class Cursos {

    #id
    #nome
    #descricao
    #valor
    #duracao
    #instrutor

   constructor(id=0, nome="", descricao="", valor=0, duracao="", instrutor="") {
    this.#id = id
    this.#nome = nome
    this.#descricao = descricao
    this.#valor = valor
    this.#duracao = duracao
    this.#instrutor = instrutor
}




        get id() {
        return this.#id
        }

    set id(id) {
        this.#id = id
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get descricao() {
        return this.#descricao
    }

    set descricao(descricao) {
        this.#descricao = descricao
    }

    get valor() {
        return this.#valor
    }

    set valor(valor) {
        this.#valor = valor
    }

    get duracao() {
        return this.#duracao
    }

    set duracao(duracao) {
        this.#duracao = duracao
    }

        get instrutor() {
        return this.#instrutor
    }
    set instrutor(instrutor) {
        this.#instrutor = instrutor
    }

toString() {
    return `
    ID: ${this.#id}\n
    Nome: ${this.#nome}\n
    Descrição: ${this.#descricao}\n
    Valor: ${this.#valor}\n
    Duração: ${this.#duracao}\n
    Instrutor: ${this.#instrutor}\n
    `
}

toJSON() {
    return {
        id: this.#id,
        nome: this.#nome,
        descricao: this.#descricao,
        valor: this.#valor,
        duracao: this.#duracao,
        instrutor: this.#instrutor
    }
}


async gravar(){
    const cursoDAO = new CursoDAO();
     await cursoDAO.gravar(this);
}

async consultar(){
    const cursoDAO = new CursoDAO();
      return await cursoDAO.consultar();
}

async consultarNome(nome){
    const cursoDAO = new CursoDAO();
      return await cursoDAO.consultarNome(nome);
}

async atualizar(){
    const cursoDAO = new CursoDAO();
     await cursoDAO.atualizar(this);
}

async deletar(){
    const cursoDAO = new CursoDAO();
     await cursoDAO.deletar(this);
}



};
