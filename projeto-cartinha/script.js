const cartinha = document.getElementById('cartinha');
const poema = document.getElementById('poema');
const audio = document.getElementById('audio');
const hint = document.getElementById('hint');

let activated = false;

async function abrirCartinha() {
  if (activated) return;
  activated = true;

  try {
    await audio.play();
    audio.volume = 0.9;
  } catch (err) {
    console.warn('Erro ao tocar áudio:', err);
  }

  cartinha.classList.add('hidden');
  hint.textContent = 'Tocando...';

  setTimeout(() => {
    poema.classList.add('visible');
    setTimeout(() => hint.style.opacity = '0', 1800);
  }, 350);
}

cartinha.addEventListener('click', abrirCartinha);

cartinha.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    abrirCartinha();
  }
});

// Clique no poema pausa/retoma a música
poema.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    hint.textContent = 'Tocando...';
    hint.style.opacity = '1';
  } else {
    audio.pause();
    hint.textContent = 'Pausado (clique no poema para retomar)';
    hint.style.opacity = '1';
  }
});
