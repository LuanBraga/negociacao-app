class MensagemView {
    constructor(selelor) {
        this._elemento = document.querySelector(selelor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
