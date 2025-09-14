import Cursos from '../models/cursos.js';

export default class CursosController {

    // Método para gravar um curso POST
    gravar(req, res){
        if(req.method === 'POST' && req.is('application/json')){
            const dados = req.body;
            if(dados.nome && dados.descricao && dados.valor && dados.duracao){
                const curso = new Cursos(
                    dados.nome,
                    dados.descricao,
                    parseFloat(dados.valor),
                    dados.duracao
            );
            curso.gravar().then(()=>{
                res.status(200).json({
                    status: true,
                    "message": 'Curso gravado com sucesso'
                });

            }).catch((err)=>{
                res.status(500).json({
                    status: false,
                    "message": 'Erro ao gravar o curso',
                    "error": err.message
                });

            });
             }
        }
        else {
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida'
            });
        }
    
    }

    // Método para consultar cursos GET
    consultar(req, res){
        if(req.method === 'GET'){
            const curso = new Cursos();
            curso.consultar().then((listacursos)=>{
                const listaJSON = listacursos.map(curso => curso.toJSON());
                res.status(200).json({
                    status: true,
                    "cursos": listaJSON
                });
            }).catch((err)=>{
                res.status(500).json({
                    status: false,
                    "message": 'Erro ao consultar os cursos',
                    "error": err.message
                });
            });
        }

    }

    // Método para atualizar um curso PUT
    atualizar(req, res){

         if((req.method === 'PUT' || req.method === 'PATCH' ) && req.is('application/json')){
            const dados = req.body;
            const nome = req.params.nome;
            if(nome && dados.descricao && dados.valor && dados.duracao){
                const curso = new Cursos(
                    dados.nome,
                    dados.descricao,
                    parseFloat(dados.valor),
                    dados.duracao
            );
            curso.atualizar().then(()=>{
                res.status(200).json({
                    status: true,
                    "message": 'Curso Atualizado com sucesso'
                });

            }).catch((err)=>{
                res.status(400).json({
                    status: false,
                    "message": 'Erro ao Atualizar o curso',
                    "error": err.message
                });

            });
             }
        }
        else {
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida'
            });
        }

    }

    // Método para deletar um curso DELETE
    deletar(req, res){
        if(req.method === 'DELETE'){
        const nome = req.params.nome;
        if(nome){
            const curso = new Cursos(nome);
            curso.deletar().then(()=>{
                res.status(200).json({
                    status: true,
                    "message": 'Curso deletado com sucesso'
                });
            }).catch((err)=>{
                res.status(400).json({
                    status: false,
                    "message": 'Erro ao deletar o curso',
                    "error": err.message
                });
            }); 
        }
        }

    };


    };