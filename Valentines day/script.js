const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const msg = document.getElementById('message');

let noClicks = 0;

yesBtn.addEventListener('click', () => {
  confetti();
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('thankYouPage').style.display = 'block';
});

noBtn.addEventListener('click', () => {
  noClicks++;
  noBtn.classList.remove('shake');
  void noBtn.offsetWidth;
  noBtn.classList.add('shake');

  const phrases = ['PLS🥺', 'BROOOOOOOOOOOO💔', 'FUCK YOU😭'];
  msg.style.display = 'block';
  msg.textContent = phrases[noClicks % phrases.length];

  yesBtn.style.transform = `scale(${1 + Math.min(noClicks * 0.05, 0.35)})`;

  if (noClicks >= 4) {
    noBtn.style.display = 'none';
    document.querySelector('.actions').style.gridTemplateColumns = '1fr';
    msg.textContent = ':)';
  }
});

function confetti() {
  const spawnHearts = () => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-10px';
    heart.style.fontSize = (12 + Math.random() * 24) + 'px';
    heart.style.zIndex = 2;
    heart.style.pointerEvents = 'none';
    document.body.appendChild(heart);

    const duration = 4000 + Math.random() * 3000; // fall speed
    heart.animate(
      [
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random()*360}deg)`, opacity: 0 }
      ],
      { duration: duration, easing: 'linear' }
    );

    setTimeout(() => heart.remove(), duration);
  };

  // Spawn a new heart every 100ms forever
  setInterval(spawnHearts, 100);
}
