// Fetch attractions and build cards
fetch('data/attractions.json')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.querySelector('#cards');

    data.forEach((place) => {
      const card = document.createElement('section');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img loading="lazy" src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;

      cardsContainer.appendChild(card);
    });
  });

const msgElement = document.getElementById("visit-message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  msgElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffMs = now - lastVisit;
  const diffSeconds = Math.floor(diffMs / 1000) % 60;
  const diffMinutes = Math.floor(diffMs / (1000 * 60)) % 60;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let parts = [];

  if (diffDays > 0) {
    parts.push(`${diffDays} day${diffDays === 1 ? "" : "s"}`);
  }

  if (diffHours > 0) {
    parts.push(`${diffHours} hour${diffHours === 1 ? "" : "s"}`);
  }

  if (diffMinutes > 0) {
    parts.push(`${diffMinutes} minute${diffMinutes === 1 ? "" : "s"}`);
  }

  if (diffSeconds > 0 && parts.length === 0) {
    parts.push(`${diffSeconds} second${diffSeconds === 1 ? "" : "s"}`);
  }

  const message = parts.length > 0
    ? `You last visited ${parts.join(" and ")} ago.`
    : "Back just now!";

  msgElement.textContent = message;
}

// Save current time
localStorage.setItem("lastVisit", now);


// Hamburger toggle menu
 const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const closeBtn = document.getElementById('close');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });

localStorage.setItem("lastVisit", now);


