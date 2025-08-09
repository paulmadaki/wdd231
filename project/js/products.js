// Import the fetchData function from dataModule.js to load product data
import { fetchData } from './dataModule.js';

// Import the showModal function from modal.js to display product details
import { showModal } from './modal.js';

// Select the container element where product cards will be displayed
const container = document.querySelector('#product-list');

// Call fetchData to retrieve product data from JSON
fetchData().then(data => {
  // Store the number of products in localStorage (optional feature)
  localStorage.setItem('productCount', data.length);

  // Loop through each product item and create a card for it
  data.forEach(item => {
    // Create a new div element for the product card
    const card = document.createElement('div');
    card.className = 'product-card';

    // Fill the card with product details and a "Details" button
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Capacity:</strong> ${item.capacity}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>${item.description}</p>
      <button class="details-btn" data-id="${item.id}">Details</button>
    `;

    // Add the card to the container in the DOM
    container.appendChild(card);
  });

  // Add a click event listener to the entire document
  // This checks if a "Details" button was clicked
  document.addEventListener('click', e => {
    if (e.target.classList.contains('details-btn')) {
      // Get the product ID from the button's data attribute
      const id = parseInt(e.target.dataset.id);

      // Find the matching product in the data array
      const item = data.find(p => p.id === id);

      // Show a modal with the product's full details
      showModal(`
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p><strong>Capacity:</strong> ${item.capacity}</p>
        <p><strong>Price:</strong> ${item.price}</p>
      `);
    }
  });
});