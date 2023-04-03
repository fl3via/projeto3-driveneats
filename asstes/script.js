// Selecione as divs para aplicar a borda verde
//pratos 
const prato = document.querySelectorAll('.cards-pratos');

let cardPratoSelecionado = null;

// Adiciona o evento de clique para cada div
prato.forEach(function (div) {
  div.addEventListener('click', function () {
    // Remove a borda verde da div anterior
    if (cardPratoSelecionado) {
      cardPratoSelecionado.style.border = 'none';
      // Esconde o ícone da div anteriormente selecionada
      const icon = cardPratoSelecionado.querySelector('.icon');
      if (icon) {
        icon.style.display = 'none';
      }
    }

    // Adiciona a borda verde na div clicada e a torna selecionada
    this.style.border = '4px solid  #32b72f';
    cardPratoSelecionado = this;

    // Exibe o ícone da div selecionada
    const icon = this.querySelector('.icon');
    if (icon) {
      icon.style.display = 'block';
    }
    habilitarBotao()
  });
});

// bebidas 
const drink = document.querySelectorAll('.cards-drink');

let drinkSelecionado = null;

drink.forEach(function (div) {
  div.addEventListener('click', function () {
    if (drinkSelecionado) {
      drinkSelecionado.style.border = 'none';

      const icon = drinkSelecionado.querySelector('.icon');
      if (icon) {
        icon.style.display = 'none';
      }
    }

    this.style.border = '4px solid  #32b72f';
    drinkSelecionado = this;

    const icon = this.querySelector('.icon');
    if (icon) {
      icon.style.display = 'block';
    }
    habilitarBotao()
  });
});

// sobremessas 
const dessert = document.querySelectorAll('.cards-dessert');

let dessertSelecionado = null;

dessert.forEach(function (div) {
  div.addEventListener('click', function () {
    if (dessertSelecionado) {
      dessertSelecionado.style.border = 'none';

      const icon = dessertSelecionado.querySelector('.icon');
      if (icon) {
        icon.style.display = 'none';
      }
    }

    this.style.border = '4px solid  #32b72f';
    dessertSelecionado = this;

    const icon = this.querySelector('.icon');
    if (icon) {
      icon.style.display = 'block';
    }
    habilitarBotao()
  });
});

// Seleciona botão
const botaoPedido = document.getElementById('finalizar-pedido');
// Função para habilitar o botão
function habilitarBotao() {
  if (cardPratoSelecionado && drinkSelecionado && dessertSelecionado) {
    botaoPedido.disabled = false;
    // Altera a cor do botão
    botaoPedido.classList.remove('enviar-pedido');
    botaoPedido.classList.add('habilitado');
    botaoPedido.style.background = ' #32b72f'
    botaoPedido.querySelector('.msg-button').textContent = 'Fechar pedido';
  } else {
    // Desabilitar o botão
    botaoPedido.disabled = true;
    // Alterar o texto 
    botaoPedido.classList.remove('habilitado');
    botaoPedido.classList.add('enviar-pedido');
    botaoPedido.querySelector('.msg-button').textContent = 'Selecione os 3 itens para fechar o pedido';
  }
}

//Envia pedido pelo whatsApp
const options = {
  style: 'currency',
  currency: 'BRL'
};

const enviarPedido = document.getElementById('finalizar-pedido');
enviarPedido.addEventListener('click', function() {
  const numeroTelefone = '5524981593428';
  const precoPrato = cardPratoSelecionado.getAttribute('data-preco');
  const precoDrink = drinkSelecionado.getAttribute('data-preco');
  const precoDessert = dessertSelecionado.getAttribute('data-preco');
  const total = parseFloat(precoPrato) + parseFloat(precoDrink) + parseFloat(precoDessert);
  const mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${cardPratoSelecionado.getAttribute('data-nome')} R$${precoPrato}
  - Bebida: ${drinkSelecionado.getAttribute('data-nome')} R$${precoDrink}
  - Sobremesa: ${dessertSelecionado.getAttribute('data-nome')} R$${precoDessert}
  Total: R$${total.toLocaleString('pt-BR', options)}`;

  const link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
});



