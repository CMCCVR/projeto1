// quando nao declaro o tipo de metodo usando o fetch,
// ele entende que é o GET (traz informações)
const response = fetch('https:jsonplaceholder.typicode.com/comments/400')
    // Promisse que trata o sucesso é o metodo then()
    // o parametro res recebe o retorno da função anterior
    .then(res => {
        console.log(res.json())
    })
    //  Promisse que trata o erro é o método catch()
    .catch(error => {
        console.log(`deu erro na busca: ${error}`)
    })