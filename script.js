function navegarViaAjax(url, seletor) {
  if (!url || !seletor) return;

  const elemento = document.querySelector(seletor);
  fetch(url)
    .then((resp) => resp.text())
    .then((html) => {
      elemento.innerHTML = html;

      const btnCalcularProporcao = document.getElementById("calcularProporcao");
      const formProporcao = document.getElementById("formProporcao");

      if (formPorcentagem) {
        formPorcentagem.addEventListener("submit", calcularPorcentagem);
      }

      if (btnCalcularProporcao) {
        btnCalcularProporcao.addEventListener("click", calcularProporcao);
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

function calcularPorcentagem(event) {
  event.preventDefault();

  const percentual = parseFloat(document.getElementById("percentual").value);
  const valorBase = parseFloat(document.getElementById("valorBase").value);
  const inputResultado = document.getElementById("resultado");
  let resultado = (valorBase * percentual) / 100;

  inputResultado.value = resultado;
}

function calcularProporcao(event) {
  event.preventDefault();
  const valorTotal = parseFloat(document.getElementById("valorTotal").value);
  const valorBase = parseFloat(document.getElementById("valorBase").value);
  const inputResultado = document.getElementById("resultado");

  let resultado = (valorBase * valorTotal) / 100;

  inputResultado.value = `${resultado}%`;
}
