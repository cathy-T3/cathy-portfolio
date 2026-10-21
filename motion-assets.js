(() => {
  const reel = document.querySelector('.motion-reel');
  if (!reel) return;
  const layer = document.createElement('div');
  layer.className = 'cinema-generated-layer';
  const assets = [
    ['assets/motion-prompt-tunnel.png', 0],
    ['assets/motion-computer-entry.png', 2],
    ['assets/motion-computer-entry.png', 3],
    ['assets/motion-workflow-network.png', 4],
    ['assets/motion-output-cube.png', 5]
  ];
  assets.forEach(([src, segment]) => { const image = document.createElement('img'); image.src = src; image.dataset.segment = segment; image.alt = ''; layer.appendChild(image); });
  reel.prepend(layer);
  const sync = () => {
    const progress = Number(getComputedStyle(reel).getPropertyValue('--motion-progress')) || 0;
    const segment = Math.min(5, Math.floor(progress * 6));
    const local = progress * 6 - segment;
    layer.querySelectorAll('img').forEach(image => { const active = Number(image.dataset.segment) === segment; image.classList.toggle('is-active', active); image.style.transform = `scale(${active ? 1.03 + local * .08 : 1.08})`; });
    requestAnimationFrame(sync);
  };
  sync();
})();
