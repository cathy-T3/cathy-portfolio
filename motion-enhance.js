(() => {
  const reel = document.querySelector('.motion-reel');
  const stage = reel?.querySelector('.motion-stage');
  if (!reel || !stage || stage.querySelector('.motion-visuals')) return;

  stage.insertAdjacentHTML('afterbegin', '<div class="motion-visuals"><div class="motion-visual visual-prompt"><small>INPUT / BRIEF</small><b>我需要一组<br>汽车品牌视觉</b><span>目标 · 人群 · 语气</span><i>⌁ ANALYZE</i></div><div class="motion-visual visual-tunnel"><span></span><span></span><span></span><b>VISUAL<br>SYSTEM</b></div><div class="motion-visual visual-stack"><i></i><i></i><i></i><i></i><b>STYLE<br>LIBRARY</b></div><div class="motion-visual visual-network"><span class="node n1">BRIEF</span><span class="node n2">PROMPT</span><span class="node n3">IMAGE</span><span class="node n4">REVIEW</span><span class="node n5">ARCHIVE</span><b>WORKFLOW</b></div><div class="motion-visual visual-cube"><span></span><b>DELIVER</b><i>40+ / DAY</i></div></div>');

  const visuals = reel.querySelectorAll('.motion-visual');
  const sync = () => {
    const progress = Number(getComputedStyle(reel).getPropertyValue('--motion-progress')) || 0;
    visuals.forEach((item, index) => item.classList.toggle('is-active', progress >= index * .2 && progress < (index + 1) * .28));
    requestAnimationFrame(sync);
  };
  sync();
})();
