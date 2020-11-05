class MensagemView {

    private _elemento: Element;

    constructor(selelor: string){

        this._elemento = document.querySelector(selelor);
    }

    update(model: string): void{
        
        this._elemento.innerHTML = this.template(model);
    }

    template(model: string): string{

        return `<p class="alert alert-info">${model}</p>`;
    }
}