const express = require("express") //criação da variavel express, função que retorna o express no node_modules
const server = express() //a varivel server executado a função do OBjeto servidor

//pegar o banco de dados (pegando um obj e colocando em uma constante)
const db = require("./database/db")

//receb uma pasta, a public... pra deixar os arquivos visiveis no servidor
//configurar pasta public
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded ({extended: true}))


//utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{ // primeiro arg pasta, segundo arg o objeto
    express: server,
    noCache: true
}) 

//configurar caminhos da minha aplicação
//pagina inicial
//req: requisição/ pedido/perguntas
//res: resposta

//configuração da rota - index (lembra que não possui mais o html na barra de pesquisa)
server.get("/", (require,res)=> { //criando um get (protocolo http)
    return res.render("index.html") //se colocasse um segundo objeto, pegando lá do html de uma forma dinamica
    //return res.render("index.html", {title:"Um título"})
})

//configuração da rota - creat-point
server.get("/create-point", (req,res)=> { //criando um get (protocolo http)
    //recebendo a requisição do usuário, no caso o formulário
    //req:query: query strings da nossa url (aquilo q fica depois da barra)
    //console.log (req.query) //prova real
    
    return res.render("create-point.html")
})

server.post("/savepoint", (req,res)=>{
      //req.body: o corpo do nosso formulário  
      console.log(req.body)
      //inserir dados no banco de dados
      //<!--  ********************************************************************************************* AQUI-->
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state, 
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send ("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html",{saved:true})
    }


    db.run(query, values, afterInsertData) //-->> inseri dados, chamando a função
})



//configuração da rota - search resualts
server.get("/search", (req,res)=> { //criando um get (protocolo http)
    
    const search = req.query.search

    if(search == ""){
        //mostrar página vazia
        return res.render("search-results.html", {total: 0})        

    }


    //utilização do banco de dados
    
    //3-consultar os dados da tabela    
    db.all(`SELECT * FROM places WHERE city  LIKE '%${search}%'`, function(err, rows) { //pesquisando por cidades - pelo nome
        if(err) {
            return console.log(err)
        }

        const total = rows.length //conta quantos elementos tem no array
        //mostrar a pagina html m os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
    })
})


//ligar o servidor
server.listen(3000) //função que ouve a porta, nesse caso a 3000



