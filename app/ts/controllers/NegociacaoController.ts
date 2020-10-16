class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    //cria uma instância de um array do tipo 'Negociacoes'
    private _negociacoes = new Negociacoes();

    //Traz os valores dos campos inseridos no formulario
    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    Adiciona(event: Event){

        //evita que o comportamento padrão do objeto seja disparado.
        event.preventDefault();

        //cria um objeto do tipo 'Negociacao' com os valores trazidos do formulario
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g,',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        //preenche o array de 'Negociacoes' com o objeto do tipo 'Negociacao' 
        this._negociacoes.adiciona(negociacao);
    }
}