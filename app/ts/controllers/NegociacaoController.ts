class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mesnagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    /* adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.valueAsDate,
            this._inputQuantidade.valueAsNumber,
            this._inputValor.valueAsNumber);

        console.log(negociacao);
    } */

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(

            new Date( this._inputData.value.replace(/-/g, '/')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
            
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mesnagemView.update('Negociação adicionada com sucesso');

        console.log(this._negociacoes.paraArray());
    }
}