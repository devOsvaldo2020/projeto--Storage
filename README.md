fonte: https://www.youtube.com/watch?v=FXlAf_iIDeo

# Mais um projetinho para aprendizado.

#localStorage e SessionStorage

- Database in Javascript (Session Storage)
    
    ## O que é Session Storage?
    
    O armazenamento da sessão é semelhante ao localStorage, exceto que os dados do armazenamento da sessão expiram no final da sessão, o que significa que os dados são excluídos quando o navegador é fechado.
    
    O limite máximo de armazenamento é de 5 MB por domínio
    
    ## Antes de começarmos
    
    Se você planeja armazenar objetos Javascript no armazenamento de sessão (SESSION STORAGE), precisa convertê-los no formato JSON.
    
    ```jsx
    const user = {
    handle: 'khattakdev'
    }
    // convertendo OBJETO em JSON
    const userToJSON = JSON.stringify(user);
    ```
    
    ## Visualização
    
    Para visualizar o armazenamento da sessão, siga as etapas a seguir.
    
    👉 Abra as ferramentas do desenvolvedor.
    
    👉 vá para a aba de aplicativos.
    
    👉 selecionar armazenamento de sessão.    
    
    
    ## Criar novo registro
    
    Veja como criar um novo registro no armazenamento da sessão.
    
    ```jsx
    // create new record
    const user = { handle: "@devosc' }
    
    // convert JS Object to JSON Format
    const userToJSON = JSON.stringify(user);
    sessionStorage.setItem('user", userToJSON);
    ```
    
    ## Ler um registro
    
    Veja como ler um registro do armazenamento da sessão
    
    ```jsx
    // ler uma sessao
    const user = sessionStorage.getItem('user');
    
    // Convert JSON to JS Object
    const JSONToUser = JSON.parse(user);
    
    console.log(JSONToUser)
    ```
    
    ## Update um registro (record)
    
    Veja como atualizar um registro existente no armazenamento da sessão.
    Reatribuir um novo valor à mesma chave irá atualizá-lo (substituí-lo).
    
    ```jsx
    // update a record
    const user = {
        name: "osvaldo",
        handle:"@devosc"
    }
    // Convert JS Object to JSON format
    const userToJSON = JSON.stringify(user);
    sessionStorage.setItem("user", userToJSON);
    ```
    
    ## Deletando um registro
    
    Veja como excluir um registro existente no armazenamento da sessão.
    
    ```jsx
    sessionStorage.removeItem('user');
    ```










resultado: 
