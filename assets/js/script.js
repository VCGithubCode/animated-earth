document.addEventListener("DOMContentLoaded", function() {
    const starStage = document.getElementById('star-stage');
  
    // Generate stars
    for (let i = 1; i <= 300; i++) {
      const star = document.createElement('div');
      star.classList.add('star', `star-${i}`);
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animation = `${(Math.random() * 2 + 3).toFixed(1)}s flicker ${(Math.random() * -2).toFixed(1)}s infinite`;
      starStage.appendChild(star);
    }
  
    // Generate shooting stars
    for (let i = 1; i <= 6; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star', `shooting-star-${i}`);
      shootingStar.style.top = `${Math.random() * 100}vh`;
      shootingStar.style.animation = `${(Math.random() * 2 + 4).toFixed(1)}s shooting-star ${(Math.random() * 8).toFixed(1)}s infinite`;
      starStage.appendChild(shootingStar);
    }
  });