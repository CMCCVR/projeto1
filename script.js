// quando nao declaro o tipo de metodo usando o fetch,
// ele entende que é o GET (traz informações)
const response = fetch('https:jsonplaceholder.typicode.com/users')
    // Promisse que trata o sucesso é o metodo then()
    // o parametro res recebe o retorno da função anterior
    .then(response => {
        console.log(response);
        return response.json();
    })

    // // .then(data => {
    // //     for (var i=0; i < data.length; i++){
    // //     console.log(data[i].name)
    // //     console.log(data[i].email)}
    // })

    .then(data => {
        console.log(data[0])
        // Usamos para inteirar (percorrer o array), o map()
        // que é um método para percorrer todo o array como um for
        // imprime cada usuário
        data.map(user => {
            console.log(`Nome: ${user.name}`)
        })
    })

    //  Promisse que trata o erro é o método catch()
    .catch(error => {
        console.log(`deu erro na busca: ${error}`)
    })

const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 3,
            title: 'Titulo Teste',
            body: 'Eu fui inserido',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json() )
        .then(data => console.log(data))
}

addPost();