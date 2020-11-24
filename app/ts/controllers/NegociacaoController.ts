import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';

export class NegociacaoController {

    // private _inputData: HTMLInputElement;
    private _inputData: JQuery;

    // private _inputQuantidade: HTMLInputElement;
    private _inputQuantidade: JQuery;

    // private _inputValor: HTMLInputElement;
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {

        // this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputData = $('#data');

        // this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputQuantidade = $('#quantidade');

        // this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._inputValor = $('#valor');
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(

            // new Date( this._inputData.value.replace(/-/g, '/')),
            new Date( this._inputData.val().toString().replace(/-/g, '/')),

            // parseInt(this._inputQuantidade.value),
            parseInt(this._inputQuantidade.val().toString()),

            // parseFloat(this._inputValor.value)
            parseFloat(this._inputValor.val().toString())
            
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso');

        console.log(this._negociacoes.paraArray());
    }
}