//CONSTRUINDO OBJETOS

const estudante = {
    nome: "Fe",
    sobrenome: "Zanette",
    numeroMatricula: "1234",
    notasSemestre: [3,10,5]
}
console.log(estudante)


//--------------------------------


//LENDO E ADICIONANDO OBJETOS

estudante.modulo = 1  // ou estudante["modulo"] = 1

console.log(estudante.nome)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)


//--------------------------------

//COPIANDO E ALTERANDO OBJETOS

const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasSemestre: [...estudante.notasSemestre,9], // outra opção: criar fora do objeto com push. Ver (*)
    modulo: estudante.modulo + 1
}

//  (*) Outra opção para adicionar nota:
//  copiaEstudante.notasSemestre.push(9)

console.log(copiaEstudante)

const estudantesLabenu = []
estudantesLabenu.push(estudante,copiaEstudante)
console.log(estudantesLabenu);


//--------------------------------

//EXERCICIOS DE FIXAÇÃO

const carrinho = {
    nome: "Fe",
    formaPagamento: "cartão",
    endereco: "Rua 1"
}

carrinho.compras = [
    {
        nomeProduto: "batata",
        precoProduto: 4.00,
        quantidade: "2 kg"
    },
    {
        nomeProduto: "leite",
        precoProduto: 5.00,
        quantidade: "4 unidades"
    },
    {
        nomeProduto: "sabonete",
        precoProduto: 4.50,
        quantidade: "3 unidades"
    },
]   

console.log(carrinho.compras.length)

const carrinhoPresente = {
    ...carrinho,
    nome: "Erik",
    formaPagamento: "cartão presente"
}

console.log(carrinho)
console.log(carrinhoPresente)