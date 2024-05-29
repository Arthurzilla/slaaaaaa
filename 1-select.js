const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'senac_bd'
});

connection.connect();

let query = 'select nome, ano from alunos where ano = 2';

connection.query(query, function(error, results, fields){
    if(error) throw error;

    let alunos = results;
    console.log(alunos)
})

connection.end();