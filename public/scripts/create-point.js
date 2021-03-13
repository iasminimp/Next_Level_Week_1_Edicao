//funcionalidade de texto
//console.log("Hello")
//função anonima: () => {}
/*document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    } ) //ouvidor de eventos

*/
//registro da função
function populateUFs (){ 
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    //.then( (res) => { return res.json() }   )
    .then(res => res.json() )
    .then (states => {
        for (const state of states){
           ufSelect.innerHTML += `<option value = "${state.id}"> ${state.nome} </option>`
           //ufSelect.innerHTML += '<option value = "1"> valor </option>'

        }

    })
}

populateUFs()

function getCities (event){
    const citySelect = document.querySelector ("select[name=city]")
    const stateInput= document.querySelector ("input[name=state]")

    //console.log(event.target.value) //value == state id
    
    const ufValue =event.target.value
    

    const indexOfSelectedState = event.target.selectedIndex;

    //atualiza o valor de inpute -> state
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML += "<option value> Selecione a Cidade</option>" //limpa o conteudo de cidade, apos mudar 
    citySelect.disabled = true // conserto de bugs, das cidades

    fetch(url)
    //.then( (res) => { return res.json() }   )
    .then(res => res.json() )
    .then (cities => {
        
        for (const city of cities){

           citySelect.innerHTML += `<option value = "${city.nome}"> ${city.nome} </option>` 
           //ufSelect.innerHTML += '<option value = "1"> valor </option>'

        }

        citySelect.disabled = false

    })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


/*itens de coleta - pt 2 - java*/
//pegar todos os li's -pontos da linha

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){ /*estrutura de repetição para ir add um "click" ao item selecionado */
    item.addEventListener("click", handleSelectedItem)
}
// --------------------------------------------------------------------------------------------------------------
//items selecionados, um array -- add ou elimnando itens


const collectedItems = document.querySelector("input[name=items]")


let selectedItems = [] //definir ele como vazio
 

function handleSelectedItem(event){
    const itemLi = event.target
    //add ou remover uma classe com o javascript (selecionar os items, p/ usuário)
    itemLi.classList.toggle("selected") //toggle => add ou remove classe
    //itemLi.classList.add("selected") // add=> add classe
    //itemLi.classList.tremove("selected") // remove => remove a classe selecionada


    const itemId = event.target.dataset.id
    console.log('ITEM ID: ',itemId)


/*primeiro - verifica se a itens selecionados
se sim pegar os itens selecionados
se já estiver selecionado tirar da seleção
se não estiver selecionado, add na seleção
e atualiza o campo escondido - input(html) - com os item selecionado*/


//---pegar items selecionados
    const alreadySelected = selectedItems.findIndex(item => { //recebe o valor de item(item = cade elemento do vetor/array)
        const itemFound = item == itemId 
        return itemFound
    }) //vai retornar um true (se achar o index) e o valor do item, caso contrario false (não achou o item)

//tirar da seleção se já estiver selecionado

    if (alreadySelected>=0){
    //tirar da seleção
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item!= itemId
            return itemIsDifferent //se retornar false, o item tem que ser removido do array/filtrado 
    })

    selectedItems = filteredItems
    }else{ //se não estiver selecionado ---> add o elemento no array
        selectedItems.push(itemId)


    }
    console.log('selectedItems: ',selectedItems)//prova real

    collectedItems.value=selectedItems
}
// -----------------------------------------------------------------------------------------------------------------


/*elemento pai e filho*/
/*correção do spam --> lá no css */

