const planetData = {
  Mercury: "🪐 Mercury is the closest planet to the Sun. It has extreme temperatures and no atmosphere.",
  Venus: "🪐 Venus is covered with thick clouds of acid. It's the hottest planet due to its greenhouse atmosphere.",
  Earth: "🌍 Earth is the only known planet with life. It has oceans, air, and a protective magnetic field.",
  Mars: "🔴 Mars is known as the Red Planet. It has dusty deserts, frozen poles, and signs of ancient water.",
  Jupiter: "🟠 Jupiter is the largest planet with a massive magnetic field and 79 known moons.",
  Saturn: "💛 Saturn is famous for its beautiful rings made of ice and rock. It's a gas giant like Jupiter.",
  Uranus: "🧊 Uranus is tilted on its side. It appears blue due to methane and spins in a unique direction.",
  Neptune: "🔵 Neptune is the farthest planet from the Sun. It has powerful winds and a deep blue color."
};

function showInfo(planet) {
  document.getElementById("planetName").innerText = planet;
  document.getElementById("planetInfo").innerText = planetData[planet];
  document.getElementById("infoBox").style.display = "block";
}