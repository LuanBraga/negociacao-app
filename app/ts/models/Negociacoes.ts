import {Negociacao} from '../models/Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){

        this._negociacoes.push(negociacao);
    }

    paraArray() : Negociacao[] {

        //progamacao defensiva, retorna um novo array toda vez que paraArray for chamado.
        return [].concat(this._negociacoes);
    }
}