// script.js
let cartCount = 0;

const cartBtn = document.getElementById('cartBtn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartBtn.textContent = `Cart (${cartCount})`;
    alert('Item added to cart!');
  });
});

// Fake login prompt
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
  const user = prompt('Enter username:');
  const pass = prompt('Enter password:');
  if (user && pass) {
    alert(`Welcome, ${user}!`);
  } else {
    alert('Login failed.');
  }
});