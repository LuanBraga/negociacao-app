import {NegociacaoController} from '../ts/controllers/NegociacaoController';

const controller = new NegociacaoController();

// document.querySelector('form')
//     .addEventListener('submit', controller.adiciona.bind(controller));

$('form').on("submit", controller.adiciona.bind(controller));