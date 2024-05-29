const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'senac_bd'
});

connection.connect();

let query = 'select id, nome from alunos where id = ?'
let id = 15

connection.query(query,  id, function(error, results, fields){
    if(error) throw error;

    if(results.length == 0){
        console.log('nenhum aluno encontrado');
        return;
    }

    let aluno = results[0];

    console.log(aluno.id + ' ' + aluno.nome)

})
connection.end();