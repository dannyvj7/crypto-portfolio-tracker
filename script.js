const addCoin = document.getElementById("addCoin");
const portValue = document.getElementById("portValue");
const coinList = document.getElementById("coinList");

const coins = [];
addCoin.addEventListener("click", function () {
  const coinName = document.getElementById("coinName").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);
  const coin = {
    name: coinName,
    quantity: quantity,
    price: price,
  };
  coins.push(coin);

  document.getElementById("coinName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";

  coinList.innerHTML = "";

  coins.forEach((coin) => {
    coinList.innerHTML += `
    <div class="card">
      <h3>${coin.name}</h3>
      <p>Quantity: ${coin.quantity}</p>
      <p>Price: $${coin.price}</p>
      <p>Value: $${coin.quantity * coin.price}</p>
    </div>
  `;
  });
  const values = coins.map((coin) => coin.quantity * coin.price);
  const total = values.reduce((acc, value) => acc + value, 0);
  portValue.textContent = `Total Portfolio Value: $${total}`;
});
