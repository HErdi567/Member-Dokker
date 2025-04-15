const people = [
    {
      name: "HerdiKiller64",
      photo: "herdi.jpeg",
      description: "Seorang admin nofap yang gak nongki 5 tahun."
    },
    {
      name: "Ridok Melers",
      photo: "ridok.png",
      description: "coach dokker suki liar kalau main ML jadi iblis."
    },
    {
      name: "Dodick colikiawan",
      photo: "dodik.jpg",
      description: "anomali menyeramkan ketika pake claude auto mvp"
    },
    {
      name: "Defuck",
      photo: "depa.png",
      description: "admin gacoan baik hati suka lebihin pangsit."
    },
    {
      name: "Komang baik hati",
      photo: "komang.png",
      description: "admin dokker yang baik hati selalu memberikan jajan/gorengan ketika nongki, semua member sayang komang."
    }
  ];
  
  const container = document.getElementById("profile-list");
  
  people.forEach(person => {
    const card = document.createElement("div");
    card.className = "profile-card";
    
    card.innerHTML = `
      <img src="${person.photo}" alt="${person.name}">
      <div class="name">${person.name}</div>
      <div class="description">${person.description}</div>
    `;
    
    card.addEventListener("click", () => {
      const desc = card.querySelector(".description");
      desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
  
    container.appendChild(card);
  });
  