/*
let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let genero = prompt("Digite o gênero do livro:");
    let ano_de_publicacao = parseInt(prompt("Digite o ano de publicação do livro:"));
    let sinopse = prompt("Digite a sinopse do livro:");

    let livro = {
        titulo: titulo,
        autor: autor,
        genero: genero,
        ano_de_publicacao: ano_de_publicacao,
        sinopse: sinopse
    };

    biblioteca.push(livro);
    console.log("Livro adicionado com sucesso.");
}

function exibirMensagem(mensagem) {
    console.log(mensagem);
}

function realizarAcao(opcao) {
    let escolhaLivro = parseInt(prompt("Digite o número do livro:")) - 1;
    if (escolhaLivro >= 0 && escolhaLivro < biblioteca.length) {
        opcao(biblioteca[escolhaLivro]);
    } else {
        exibirMensagem("Escolha de livro inválida.");
    }
}

function editarLivro(livro) {
    let novoTitulo = prompt("Digite o novo título:");
    let novoAutor = prompt("Digite o novo autor:");
    let novoGenero = prompt("Digite o novo gênero:");
    let novoAno = parseInt(prompt("Digite o novo ano de publicação:"));
    let novaSinopse = prompt("Digite a nova sinopse:");

    livro.titulo = novoTitulo;
    livro.autor = novoAutor;
    livro.genero = novoGenero;
    livro.ano_de_publicacao = novoAno;
    livro.sinopse = novaSinopse;

    exibirMensagem("Informações do livro atualizadas com sucesso.");
}

function removerLivro(livro) {
    let indice = biblioteca.indexOf(livro);
    if (indice !== -1) {
        biblioteca.splice(indice, 1);
        exibirMensagem("Livro removido com sucesso.");
    } else {
        exibirMensagem("Livro não encontrado na biblioteca.");
    }
}

while (true) {
    let opcao = prompt("Bem vindo à Biblioteca de Ana. Digite a opção desejada (a para adicionar, p para pesquisar, e para editar, r para remover, v para visualizar, s para sair):");

    if (opcao === "a") {
        adicionarLivro();
    } else if (opcao === "p") {
        let query = prompt("Digite uma informação do livro (nome, autor, ano, gênero) para encontrá-lo:");
        pesquisarLivros(query);
    } else if (opcao === "s") {
        exibirMensagem("Obrigada por utilizar nossa biblioteca! Saindo...");
        break;
    } else if (opcao === "v") {
        realizarAcao(visualizarDetalhes);
    } else if (opcao === "e") {
        realizarAcao(editarLivro);
    } else if (opcao === "r") {
        realizarAcao(removerLivro);
    } else {
        exibirMensagem("Opção inválida.");
    }
}

function pesquisarLivros(query) {
    if (biblioteca.length === 0) {
        exibirMensagem("A biblioteca está vazia.");
        return;
    } else {
    exibirMensagem("Resultados da pesquisa:");
    }

    let resultados = [];
    for (let i = 0; i < biblioteca.length; i++) {
        let livro = biblioteca[i];
        if (
            livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
            livro.autor.toLowerCase().includes(query.toLowerCase()) ||
            livro.genero.toLowerCase().includes(query.toLowerCase())
        ) {
            resultados.push(livro);
        }
    }

    if (resultados.length === 0) {
        exibirMensagem("Nenhum livro encontrado.");
    } else {
        for (let i = 0; i < resultados.length; i++) {
            let livro = resultados[i];
            exibirMensagem((i + 1) + ". " + livro.titulo + " por " + livro.autor);
        }
    }
}

function visualizarDetalhes(livro) {
    exibirMensagem("Detalhes do livro \"" + livro.titulo + "\":\n" +
                   "Autor: " + livro.autor + "\n" +
                   "Gênero: " + livro.genero + "\n" +
                   "Ano de Publicação: " + livro.ano_de_publicacao + "\n" +
                   "Sinopse: " + livro.sinopse);
}
*/
//
class Livro {
    constructor(titulo, autor, genero, ano_de_publicacao, sinopse) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano_de_publicacao = ano_de_publicacao;
        this.sinopse = sinopse;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro() {
        let titulo = prompt("Digite o título:");
        let autor = prompt("Digite o autor:");
        let genero = prompt("Digite o gênero:");
        let ano_de_publicacao = parseInt(prompt("Digite o ano de publicação:"));
        let sinopse = prompt("Digite a sinopse:");

        let livro = new Livro(titulo, autor, genero, ano_de_publicacao, sinopse);

        this.livros.push(livro);
        console.log("Livro adicionado com sucesso.");
    }

    pesquisarLivros(query) {
        if (this.livros.length === 0) {
            console.log("A biblioteca está vazia.");
            return;
        } else {
            console.log("Resultados da pesquisa:");
        }

        let resultados = [];
        for (let i = 0; i < this.livros.length; i++) {
            let livro = this.livros[i];
            if (
                livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
                livro.autor.toLowerCase().includes(query.toLowerCase()) ||
                livro.genero.toLowerCase().includes(query.toLowerCase())
            ) {
                resultados.push(livro);
            }
        }

        if (resultados.length === 0) {
            console.log("Nenhum livro fora encontrado.");
        } else {
            for (let i = 0; i < resultados.length; i++) {
                let livro = resultados[i];
                console.log((i + 1) + ". " + livro.titulo + " por " + livro.autor);
            }
        }
    }

    visualizarDetalhes(livro) {
        console.log("Detalhes do livro \"" + livro.titulo + "\":\n" +
            "Autor: " + livro.autor + "\n" +
            "Gênero: " + livro.genero + "\n" +
            "Ano de Publicação: " + livro.ano_de_publicacao + "\n" +
            "Sinopse: " + livro.sinopse);
    }

    editarLivro(livro) {
        let novoTitulo = prompt("Digite o novo título:");
        let novoAutor = prompt("Digite o novo autor:");
        let novoGenero = prompt("Digite o novo gênero:");
        let novoAno = parseInt(prompt("Digite o novo ano de publicação:"));
        let novaSinopse = prompt("Digite a nova sinopse:");

        livro.titulo = novoTitulo;
        livro.autor = novoAutor;
        livro.genero = novoGenero;
        livro.ano_de_publicacao = novoAno;
        livro.sinopse = novaSinopse;

        console.log("Informações do livro atualizadas com sucesso.");
    }

    removerLivro(livro) {
        let indice = this.livros.indexOf(livro);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
            console.log("Livro removido com sucesso.");
        } else {
            console.log("Livro não encontrado na biblioteca.");
        }
    }
}

let bibliotecaDeAna = new Biblioteca();

while (true) {
    let opcao = prompt("Bem vindo(a) à Biblioteca de Ana.\nDigite a opção desejada:\n-------------------\n(a para adicionar,\n p para pesquisar,\n e para editar,\n r para remover,\n v para visualizar,\n s para sair):\n------------------ ");

    if (opcao === "a") {
        bibliotecaDeAna.adicionarLivro();
    } else if (opcao === "p") {
        let query = prompt("Digite uma informação do livro (nome, autor, ano, gênero) para encontrá-lo:");
        bibliotecaDeAna.pesquisarLivros(query);
    } else if (opcao === "s") {
        console.log("Obrigada por utilizar nossa biblioteca! Saindo...");
        break;
    } else if (opcao === "v") {
        let escolhaLivro = parseInt(prompt("Digite o número do livro:")) - 1;
        if (escolhaLivro >= 0 && escolhaLivro < bibliotecaDeAna.livros.length) {
            bibliotecaDeAna.visualizarDetalhes(bibliotecaDeAna.livros[escolhaLivro]);
        } else {
            console.log("Escolha de livro inválida.");
        }
    } else if (opcao === "e") {
        let escolhaLivro = parseInt(prompt("Digite o número do livro:")) - 1;
        if (escolhaLivro >= 0 && escolhaLivro < bibliotecaDeAna.livros.length) {
            bibliotecaDeAna.editarLivro(bibliotecaDeAna.livros[escolhaLivro]);
        } else {
            console.log("Escolha de livro inválida.");
        }
    } else if (opcao === "r") {
        let escolhaLivro = parseInt(prompt("Digite o número do livro:")) - 1;
        if (escolhaLivro >= 0 && escolhaLivro < bibliotecaDeAna.livros.length) {
            bibliotecaDeAna.removerLivro(bibliotecaDeAna.livros[escolhaLivro]);
        } else {
            console.log("Escolha de livro inválida.");
        }
    } else {
        console.log("Opção inválida.");
    }
}
