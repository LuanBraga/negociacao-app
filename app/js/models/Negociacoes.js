class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //progamacao defensiva, retorna um novo array toda vez que paraArray for chamado.
        return [].concat(this._negociacoes);
    }
}
