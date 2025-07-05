const packageDetails = {
  "Paris Getaway": [
    "🗼 Eiffel Tower, Louvre Museum & Seine River Cruise",
    "🏨 4-star accommodation with breakfast",
    "🚖 Airport transfers included",
    "🚌 Optional day trip to Versailles",
    "🎧 English-speaking guide on city tours"
  ],
  "Dubai Tour": [
    "🏙️ Desert safari, Burj Khalifa & Dubai Marina cruise",
    "🏨 Luxury stay with breakfast",
    "🚘 Private airport pickup and drop",
    "🛍️ Visit to Dubai Mall & Gold Souk",
    "🗺️ Guided city tour"
],
  "Bali Escape": [
    "🏝️ Beaches, temples, and rice terraces tour",
    "🏨 5-star luxury beachfront resort stay",
    "🚐 Private guided sightseeing with transfers",
    "🍽️ Daily breakfast + welcome dinner",
    "💆‍♂️ Optional spa or cultural experience"
  ],
  "Thailand Fun Trip": [
    "🏖️ Phuket & Krabi island hopping",
    "🐘 Cultural shows and city tours",
    "🛏️ 3-star hotel stays with breakfast",
    "🚤 Phi Phi island or James Bond island day trip",
    "🚖 Airport pickup and intercity transfer"
  ],
  "Singapore Delight": [
    "🌆 Marina Bay Sands, Gardens by the Bay visit",
    "🎢 Universal Studios full day access",
    "🚌 Half-day city guided tour",
    "🏨 Centrally located 3-star stay",
    "🚖 Airport pickup and drop"
  ],
  "Kashmir Paradise": [
    "🚣 Stay in traditional Srinagar houseboats",
    "❄️ Day trip to Gulmarg or Sonamarg snow region",
    "🌸 Visit Mughal Gardens and local bazaars",
    "🏨 Deluxe hotel and boat stay with breakfast",
    "🚐 Local sightseeing in private vehicle"
  ],
  "Andaman Cruise": [
    "🚢 Cruise to Havelock & Neil Island",
    "🏖️ Radhanagar Beach & Elephant Beach snorkeling",
    "🏨 Hotel stay in Port Blair and Havelock",
    "🛳️ Ferry transfers and island permits included",
    "📸 Light & Sound Show at Cellular Jail"
  ],
  "Leh-Ladakh Adventure": [
    "🏍️ Guided bike tour to Pangong & Nubra Valley",
    "🏞️ Stay in Leh, camps in Nubra and Pangong",
    "🍽️ All meals included",
    "🧭 Inner line permits and local guide",
    "🗻 Magnetic Hill, monasteries, and lakes"
  ],
  "Goa Beach Fun": [
    "🏖️ North & South Goa sightseeing",
    "🏨 Beachfront resort stay with pool access",
    "🍽️ Breakfast included",
    "🚐 Airport pickup + local tours",
    "🎉 Optional water sports and nightlife experience"
  ]
};

function openModal(title) {
  document.getElementById('modal-title').textContent = title;
  const list = document.getElementById('modal-details');
  list.innerHTML = "";
  packageDetails[title].forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });
  document.getElementById('package-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('package-modal').style.display = 'none';
}




  function toggleMenu() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("show");
    }

    