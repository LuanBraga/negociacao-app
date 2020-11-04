class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    /* adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.valueAsDate,
            this._inputQuantidade.valueAsNumber,
            this._inputValor.valueAsNumber);

        console.log(negociacao);
    } */
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, '/')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    }
}
