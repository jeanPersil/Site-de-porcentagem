const menuBurguer = document.getElementById("menu-button");
const navegacao = document.getElementById("navegacao");

document.addEventListener("DOMContentLoaded", function () {
  const linkPadrao = document.querySelector("nav a.active");
  if (linkPadrao) {
    navegarViaAjax(
      linkPadrao.getAttribute("link"),
      linkPadrao.getAttribute("destino")
    );
  }
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

function calcularPorcentagem() {
  const percentual = parseFloat(document.getElementById("percentual").value);
  const valorBase = parseFloat(document.getElementById("valorBase").value);
  const inputResultado = document.getElementById("resultado");

  if (isNaN(percentual) || isNaN(valorBase)) {
    alert("Por favor, preencha ambos os campos com valores numéricos");
    return;
  }

  if (valorBase === 0) {
    alert("O valor total não pode ser zero!");
    return;
  }

  let resultado = (valorBase * percentual) / 100;

  inputResultado.value = `${resultado.toFixed(2)}R$`;
}

function calcularProporcao() {
  const valorBase = parseFloat(document.getElementById("valorBase").value);
  const valorTotal = parseFloat(document.getElementById("valorTotal").value);
  const inputResultado = document.getElementById("resultado");

  if (isNaN(valorBase) || isNaN(valorTotal)) {
    alert("Por favor, preencha ambos os campos com valores numéricos");
    return;
  }

  if (valorTotal === 0) {
    alert("O valor total não pode ser zero!");
    return;
  }

  const resultado = (valorBase / valorTotal) * 100;
  inputResultado.value = `${resultado.toFixed(2)}%`;
}

menuBurguer.addEventListener("click", () => {
  navegacao.classList.toggle("mostrar");
});
