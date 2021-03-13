//document.write("Hello")

//comentários

//Variaveis, tipos de dados

var myvar
myvar = "Hello"

//executando a variavel

document.write(myvar)
document.write(myvar)
document.write(myvar)
document.write(myvar)
document.write(myvar)
document.write(myvar)

const myconst = "He"
//concatenando o valor na impressão
document.write(myconst + myvar)

// let == variavel
//let myvar = "he"

//string => declarada atraves das "" ''
const s1 = "Isso é uma String"
const s2 = "Isso tambem é uma String"


//number
const n1 =1
const n2 = 12
// imprime a variavel e não o numero
document.write( n1 + n2)

//booleano - true or false

const bTrue = true
const bFalse = false
document.write(bFalse)
//objeto possuem propriedades e funcionalidades
//estrutura de dado PESSOA
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  //uma funcionalidade dentro da estrutura
  correr(){
    //document.write ("run forest")
    return "run forest"
  }
}
//acessando elementos dentro do da estrutura
document.write(pessoa.idade)

document.write(pessoa.correr)

//Array  Vetores
//coleção de dados, tanto string quanto numero (array)
const colecaoDeBolinhas = ["Blue","green",1]
//impresão do do array
document.write(colecaoDeBolinhas)
//pegando o elemento do array -> começa no ZERO
document.write(colecaoDeBolinhas[1])

//Funções - funcionalidades - atalhos - reuso de codigo
//função registrada
function sayMyName(){
  document.write("Iasmin")
}
//execução da função
document.write()
sayMyName()
sayMyName()
sayMyName()


//função registrada - que recebe o nome
function sayMyName(name){
  document.write(name)
}
sayMyName("Iasmin Marques")

//condicionais
const notaFinal = 7

if (notaFinal<=5){
  //caminho1
  document.write ("Reprovado")
  
}else{
  //caminho 2
  document.write ("Aprovado")
}


//loop - repetições
for (i=0;i<10;i++){
  //document.write("<p> Alo</p>")
  //imprimindo elemento
  document.write('<p> ${i} </p>')
  //**** não ta funcionando :/
}
