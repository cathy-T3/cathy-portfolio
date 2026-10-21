(() => {
  const reel = document.querySelector('.motion-reel');
  if (!reel) return;
  const matrix = ['assets/hero-hires-1.png', 'assets/hero-hires-3.png', 'assets/hero-hires-4.png', 'assets/page2-bg-violet-dark.png'];
  const steps = [
    {no:'01',eyebrow:'BRIEF / INTENT',title:'Start with the question.',cn:'先理解问题，再开始生成。',body:'把一句模糊需求拆成目标、受众、品牌语气和视觉机会。设计师的第一步不是打开工具，而是建立判断。',meta:['OBJECTIVE','AUDIENCE','TONE'],kind:'brief'},
    {no:'02',eyebrow:'IMAGE MATRIX / EXPLORE',title:'Generate many directions.',cn:'让许多可能同时出现。',body:'用小格子快速铺开角色、构图、光线和风格方向，再从中筛选真正符合品牌的视觉语言。',meta:['SUBJECT','COMPOSITION','LIGHT'],kind:'matrix'},
    {no:'03',eyebrow:'COMPUTER ENTRY / CONTROL',title:'Bring the idea into a system.',cn:'把素材带进可执行的工作台。',body:'Prompt、参考图、生成结果和人工判断进入同一条生产链路，创意从单张画面变成可持续的工作方式。',meta:['PROMPT','IMAGE','REVIEW'],kind:'computer'},
    {no:'04',eyebrow:'WORKFLOW NETWORK / REVIEW',title:'Connect every decision.',cn:'让每个判断都有去处。',body:'从需求理解、提示词、生成、人工复核，到自动打标和资产归档，每一个节点都能被追踪和复用。',meta:['GENERATE','CHECK','ARCHIVE'],kind:'network'},
    {no:'05',eyebrow:'OUTPUT ARCHIVE / DELIVERY',title:'Turn process into output.',cn:'最后沉淀成可以交付的结果。',body:'质量、速度和团队资产同时被保留下来：日常产出最高约 40 张，首轮通过率约 97%。',meta:['QUALITY','SPEED','DELIVERY'],kind:'output'}
  ];
  let current = 0;
  reel.className = 'motion-reel workflow-reel';
  reel.innerHTML = '<div class="workflow-backdrop"></div><div class="workflow-overlay"></div><div class="workflow-top"><span>AI VISUAL PRODUCTION / CASE STUDY</span><span class="workflow-count">01 / 05</span></div><div class="workflow-card"><div class="workflow-card-head"><span class="workflow-eyebrow"></span><span class="workflow-status">CASE FILE / OPEN</span></div><div class="workflow-card-body"><div class="workflow-copy"><h3 class="workflow-title"></h3><h4 class="workflow-cn"></h4><p class="workflow-body"></p><div class="workflow-meta"></div></div><div class="workflow-object"></div></div><div class="workflow-card-foot"><span class="workflow-progress"></span><button class="workflow-prev" type="button">← BACK</button><button class="workflow-next" type="button">NEXT STEP ↗</button></div></div><div class="workflow-bottom"><span>CLICK TO MOVE THROUGH THE SYSTEM</span><span class="workflow-index">01—05</span></div>';
  const $ = selector => reel.querySelector(selector);
  const renderObject = step => {
    if (step.kind === 'matrix') return `<div class="workflow-matrix">${matrix.map(src => `<img src="${src}" alt="">`).join('')}</div>`;
    if (step.kind === 'network') return '<div class="workflow-network-art"><i class="core">AI</i><i class="node n1">BRIEF</i><i class="node n2">PROMPT</i><i class="node n3">IMAGE</i><i class="node n4">REVIEW</i><i class="node n5">ARCHIVE</i><span class="wire w1"></span><span class="wire w2"></span><span class="wire w3"></span><span class="wire w4"></span><span class="wire w5"></span></div>';
    if (step.kind === 'computer') return '<div class="workflow-computer"><div class="screen"><span></span><span></span><span></span><b>WORKFLOW / CONTROL</b></div><i></i></div>';
    if (step.kind === 'output') return '<div class="workflow-output"><div class="output-cube"></div><strong>40+ / DAY</strong><small>QUALITY CHECKED · ARCHIVED</small></div>';
    return '<div class="workflow-brief"><span>BRIEF INPUT</span><strong>Automotive<br>brand visual</strong><i>OBJECTIVE / AUDIENCE / TONE</i><b>⌁ ANALYZE</b></div>';
  };
  const render = () => {
    const step = steps[current];
    $('.workflow-count').textContent = `${step.no} / 05`;
    $('.workflow-index').textContent = `${step.no}—05`;
    $('.workflow-eyebrow').textContent = step.eyebrow;
    $('.workflow-title').textContent = step.title;
    $('.workflow-cn').textContent = step.cn;
    $('.workflow-body').textContent = step.body;
    $('.workflow-meta').innerHTML = step.meta.map(item => `<span>${item}</span>`).join('');
    $('.workflow-object').innerHTML = renderObject(step);
    $('.workflow-progress').style.width = `${((current + 1) / steps.length) * 100}%`;
    $('.workflow-prev').disabled = current === 0;
    $('.workflow-next').textContent = current === steps.length - 1 ? 'RESTART ↻' : 'NEXT STEP ↗';
    reel.dataset.step = step.no;
  };
  $('.workflow-next').addEventListener('click', () => { current = current === steps.length - 1 ? 0 : current + 1; render(); });
  $('.workflow-prev').addEventListener('click', () => { if (current > 0) { current -= 1; render(); } });
  render();
})();
