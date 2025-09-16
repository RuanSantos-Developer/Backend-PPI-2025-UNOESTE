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
// Método para consultar cursos GET
consultar(req, res) {
    if (req.method === 'GET') {

    const nome = req.params.nome;
    const curso = new Cursos();
    if (nome){

        curso.consultarNome(nome)
        .then((listaCursos)=>{
            if(listaCursos.length > 0){

            res.status(200).json({
                status: true,
                "message": 'Curso consultado com sucesso',
                "cursos": listaCursos
            });
            }
        })

        .catch((err)=>{
            res.status(500).json({
                status: false,
                "message": 'Erro ao consultar o curso',
                "error": err.message
            });
        });

    }
    else{

        curso.consultar()
         .then((listaCursos)=>{
            res.status(200).json({
                status: true,
                "message": 'Cursos consultados com sucesso',
                "cursos": listaCursos
            });
         })
        .catch((err)=>{
            res.status(500).json({
                status: false,
                "message": 'Erro ao consultar os cursos',
                "error": err.message
            });
        });

    }


           
}
else{
    res.status(400).json({
        status: false,
        "message": 'Requisição inválida'
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
             const curso = new Cursos();
            curso.consultarNome(nome)
            .then((lista) => {
                const curso = lista[0];
                if (curso) {
                    curso.deletar()
                        .then(() => {
                            res.status(200).json({
                                status: true,
                                message: 'Curso deletado com sucesso'
                            });
                        })

                } else {
                    res.status(404).json({
                        status: false,
                        message: 'Curso não encontrado'
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    status: false,
                    message: 'Erro ao consultar o curso',
                    error: err.message
                });
            });
        }
        else {
            res.status(400).json({
                status: false,
                message: 'Requisição inválida'
            });
        }
    }
}
};