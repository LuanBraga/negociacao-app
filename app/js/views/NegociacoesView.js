class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.paraArray().map(negociao => `<tr>
                                <td>${negociao.data.getDate()}/${negociao.data.getMonth() + 1}/${negociao.data.getFullYear()}</td>
                                <td>${negociao.quantidade}</td>
                                <td>${negociao.valor}</td>
                                <td>${negociao.volume}</td>
                            </tr>`).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
