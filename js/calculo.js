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

function mascararMoeda(valor) {
  valor = valor.replace(/\D/g, "");

  const numero = parseFloat(valor) || 0;

  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numero / 100);

  return valorFormatado;
}

function limparTodosInputs() {
  document.querySelectorAll("input").forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}

export {
  calcularPorcentagem,
  calcularProporcao,
  mascararMoeda,
  limparTodosInputs,
};
