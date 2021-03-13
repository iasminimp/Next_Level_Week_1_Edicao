//importar a dependencia do sqlite3

const sqlite3 = require ("sqlite3").verbose()

//iniciar o objeto de banco de dados qu irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") // terminal: node src/database/db.js ->>> criou o bando de dados, na mesma pasta (datbase)


//exportação do arquivo pra utilização da aplicação
module.exports = db



//utilizar o objeto de banco de dados, para nossas operações


db.serialize(()=>{
 /*   
    //com comandos SQL
    //1-criar uma tabela


    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2-inserir dados na tabela
    
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Minas Gerais",
        "Rio do sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }


    db.run(query, values, afterInsertData) //-->> inseri dados, chamando a função

*/


    //3-consultar os dados da tabela
    // * -> todos, se quisesse buscar por todos os dados:
    // db.all(`SELECT * FROM places`, function(err, rows)
    
    /*
    db.all(`SELECT state FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)

    })
    */
    

    //4-deletar um dado da tabela    ---> pelo id do resgitro
    /*
    db.run(`DELETE FROM places WHERE id = ?`,[3], function(err){
        if(err) {
            return console.log(err)
        }

        console.log ("Registro deletado com sucesso!")
    })
    */
    


})

