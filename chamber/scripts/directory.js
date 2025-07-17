// ====== DOM Elements ======
const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

// ====== View Toggle Buttons ======

// Grid View (with logos)
gridBtn.addEventListener("click", () => {
  directory.classList.remove("list-view");
  directory.classList.add("grid-view");

  // Show all logo images
  document.querySelectorAll(".member-logo").forEach((img) => {
    img.style.display = "block";
  });
});

// List View (hide logos)
listBtn.addEventListener("click", () => {
  directory.classList.remove("grid-view");
  directory.classList.add("list-view");

  // Hide all logo images
  document.querySelectorAll(".member-logo").forEach((img) => {
    img.style.display = "none";
  });
});

// ====== Fetch and Display Members ======

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch JSON");

    const data = await response.json();
    const members = data.members;
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
    directory.innerHTML = `<p class="error">Error loading member directory. Please try again later.</p>`;
  }
}

function displayMembers(members) {
  directory.innerHTML = ""; // Clear any existing cards

  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    // Build the card layout
    card.innerHTML = `
      <img src="images/${member.logo}" alt="${member.name} logo" class="member-logo">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
    `;

    directory.appendChild(card);
  });
}

// ====== Footer Info ======
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// ====== Initialize ======
getMembers();
