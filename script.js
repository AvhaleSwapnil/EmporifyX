document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    // Add more products as needed
  ];

  const cart = [];

  function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(listItem);
      total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  }

  document.querySelectorAll(".add-to-cart-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = products[index];
      cart.push(product);
      renderCart();
    });
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout is not implemented yet!");
  });

  renderCart();
});
