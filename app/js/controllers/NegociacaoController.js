class NegociacaoController {
    //Traz os valores dos campos inseridos no formulario
    constructor() {
        //cria uma instância de um array do tipo 'Negociacoes'
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    Adiciona(event) {
        //evita que o comportamento padrão do objeto seja disparado.
        event.preventDefault();
        //cria um objeto do tipo 'Negociacao' com os valores trazidos do formulario
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        //preenche o array de 'Negociacoes' com o objeto do tipo 'Negociacao' 
        this._negociacoes.adiciona(negociacao);
    }
}
