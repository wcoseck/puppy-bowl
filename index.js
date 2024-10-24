const roster = [];
const rosterDiv = document.getElementById("roster");
const detailsDiv = document.getElementById("details");

function displayRoster() {
  rosterDiv.innerHTML = "";
  roster.forEach((player, index) => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    playerDiv.innerHTML = `
                <div>
                    <img src="${player.image}" alt="${player.name}">
                    <strong>${player.name}</strong> (${player.breed})
                </div>
                <div>
                    <button onclick="viewDetails(${index})">See Details</button>
                    <button onclick="removePlayer(${index})">Remove</button>
                </div>
            `;
    rosterDiv.appendChild(playerDiv);
  });
}

function viewDetails(index) {
  const player = roster[index];
  document.getElementById("detail-name").innerText = player.name;
  document.getElementById("detail-breed").innerText = `Breed: ${player.breed}`;
  document.getElementById("detail-team").innerText = `Team: ${
    player.team || "unassigned"
  }`;
  document.getElementById("detail-image").src = player.image;
  detailsDiv.style.display = "block";
  rosterDiv.style.display = "none";
}

function removePlayer(index) {
  roster.splice(index, 1);
  displayRoster();
}

document
  .getElementById("add-player-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("player-name").value;
    const breed = document.getElementById("player-breed").value;
    const image = document.getElementById("player-image").value;
    roster.push({ name, breed, image, team: null });
    displayRoster();
    this.reset();
  });

document.getElementById("back-button").addEventListener("click", function () {
  detailsDiv.style.display = "none";
  rosterDiv.style.display = "block";
});

displayRoster();
