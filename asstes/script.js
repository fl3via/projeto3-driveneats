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
  });
});


