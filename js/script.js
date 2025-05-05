import {
  calcularPorcentagem,
  calcularProporcao,
  limparTodosInputs,
} from "./calculo.js";

const menuBurguer = document.getElementById("menu-button");
const navegacao = document.getElementById("navegacao");

document.addEventListener("DOMContentLoaded", function () {
  navegacao.classList.remove("mostrar");
  const linkPadrao = document.querySelector("nav a.active");
  if (linkPadrao) {
    navegarViaAjax(
      linkPadrao.getAttribute("link"),
      linkPadrao.getAttribute("destino")
    );
  }
});

menuBurguer.addEventListener("click", () => {
  navegacao.classList.toggle("mostrar");
});

function navegarViaAjax(url, seletor) {
  if (!url || !seletor) return;

  const elemento = document.querySelector(seletor);
  fetch(url)
    .then((resp) => resp.text())
    .then((html) => {
      elemento.innerHTML = html;

      const btnCalcularProporcao = document.getElementById("calcularProporcao");
      const btnCalcularPorcentagem = document.getElementById(
        "calcularPorcentagem"
      );

      const btnLimpar = document.getElementById("limpar");

      if (btnLimpar) {
        btnLimpar.addEventListener("click", limparTodosInputs);
      }
      if (btnCalcularProporcao) {
        btnCalcularProporcao.addEventListener("click", calcularProporcao);
      }

      if (btnCalcularPorcentagem) {
        btnCalcularPorcentagem.addEventListener("click", calcularPorcentagem);
      }
    })

    .catch((e) => {
      alert(`error: ${e}`);
    });
}

document.querySelectorAll("[link]").forEach((link) => {
  const url = link.getAttribute("link");
  const seletorDestino = link.getAttribute("destino");

  link.onclick = (e) => {
    e.preventDefault();
    navegarViaAjax(url, seletorDestino);
  };
});
