
  const images = [
    "Images/bandarban.png",
    "Images/kuakata.png",
    "Images/rangamati.png",
    "Images/saintmartin.png",
    "Images/sajek.png",
    "Images/sunamganj.png",
    "Images/sundarban.png",
    "Images/sylhet.png"
  ];

  let currentIndex = 0;
  const hero = document.getElementById("hero");

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }

 
 changeBackground();
  setInterval(changeBackground, 4000);
