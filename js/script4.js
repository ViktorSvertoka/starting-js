// замыкание пример

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

const jack = makeSheff('Jack');
jack('котлеты');
jack('стейки');
jack('шашлыки');

const bill = makeSheff('Bill');
bill('пироги');
bill('кексы');
bill('блинчики');
