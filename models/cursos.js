import CursoDAO from "../DB/cursosDAO.js"

export default class Cursos {

    #nome
    #descricao
    #valor
    #duracao

    constructor(nome="", descricao="", valor=0, duracao="") {
        this.#nome = nome
        this.#descricao = descricao
        this.#valor = valor
        this.#duracao = duracao
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

toString() {
    return `
    Nome: ${this.#nome}\n
    Descrição: ${this.#descricao}\n
    Valor: ${this.#valor}\n
    Duração: ${this.#duracao}
    `
}

toJSON() {
    return {
        nome: this.#nome,
        descricao: this.#descricao,
        valor: this.#valor,
        duracao: this.#duracao
    }
}


async gravar(){
    const cursoDAO = new CursoDAO();
     await cursoDAO.gravar(this);
}

async consultar(){
    const cursoDAO = new CursoDAO();
      return await cursoDAO.consultar(this);
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
