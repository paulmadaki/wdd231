// scripts/spotlights.js

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter for gold or silver members
    const spotlightMembers = data.members.filter(member =>
      ["gold", "silver"].includes(member.membership.toLowerCase())
    );

    // Shuffle array and pick 2 or 3
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2 or 3

    const container = document.querySelector(".spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <!--<img src="${member.logo}" alt="${member.name} logo"> -->
        <h4>${member.name}</h4>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">${member.membership} Member</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlight fetch error:", error);
  }
}

loadSpotlights();
