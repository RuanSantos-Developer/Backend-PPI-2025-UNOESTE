import Cursos from '../models/cursos.js';
import conectar from '../DB/conexao.js';

export default class CursoDAO {

    async gravar(cursos){
        if(cursos instanceof Cursos){
            const conexao = await conectar();

            const sql = 'INSERT INTO cursos (nome, descricao, valor, duracao, instrutor) VALUES (?, ?, ?, ?, ?)';

            const parametros = [
                cursos.nome, 
                cursos.descricao, 
                cursos.valor, 
                cursos.duracao,
                cursos.instrutor,
                ];

            await conexao.execute(sql, parametros);
        }

    };

async consultar() {
    const conexao = await conectar();
    const sql = "SELECT * FROM cursos";
    const [linhas] = await conexao.query(sql);
    conexao.release();

    let listaCursos = [];
    for (let linha of linhas) {
        const curso = new Cursos(
            linha.id,
            linha.nome,
            linha.descricao,
            parseFloat(linha.valor),
            linha.duracao,
            linha.instrutor,
        );
        listaCursos.push(curso);
    }
    return listaCursos;
}


async consultarNome(nome) {
    nome  = nome || "";
    const conexao = await conectar();
    const sql = "SELECT * FROM cursos WHERE nome LIKE ?";
    const [linhas] = await conexao.query(sql, [`%${nome}%`]);
    conexao.release();

    let listaCursos = [];
    for (let linha of linhas) {
        const curso = new Cursos(
            linha.id,
            linha.nome,
            linha.descricao,
            parseFloat(linha.valor),
            linha.duracao,
            linha.instrutor
        );
        listaCursos.push(curso);
    }
    return listaCursos;
}


    async atualizar(cursos){

        if(cursos instanceof Cursos){
            const conexao = await conectar();

            const sql = 'UPDATE cursos SET nome = ?, descricao = ?, valor = ?, duracao = ?, instrutor = ? WHERE id = ?';
            const parametros = [
                cursos.nome, 
                cursos.descricao, 
                cursos.valor, 
                cursos.duracao,
                cursos.instrutor,
                cursos.id
            ];
            await conexao.execute(sql, parametros);

            conexao.release();
        }

    };

    async deletar(cursos){
        if(cursos instanceof Cursos){

            const conexao = await conectar();
            const sql = 'DELETE FROM cursos WHERE id = ?';

            const parametros = [cursos.id];

            await conexao.execute(sql, parametros);
            conexao.release();
        }

    };

};