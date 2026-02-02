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
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-10px';
    document.body.appendChild(heart);
    heart.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(100vh)' }],
      { duration: 1200 }
    );
    setTimeout(() => heart.remove(), 1200);
  }
}
