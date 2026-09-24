(() => {
  const body=document.body;
  const toggle=document.getElementById('themeToggle');
  const stored=localStorage.getItem('theme');
  if(stored==='dark') body.classList.add('dark');
  toggle?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light')});
  const track=document.querySelector('[data-track]');
  const next=document.querySelector('[data-next]');
  const prev=document.querySelector('[data-prev]');
  let index=0;
  function move(dir){if(!track)return;const cards=[...track.children];const max=Math.max(0,cards.length-(window.innerWidth<=900?1:3));index=Math.min(max,Math.max(0,index+dir));const gap=32;const w=cards[0]?.getBoundingClientRect().width||0;track.style.transform=`translateX(${-index*(w+gap)}px)`}
  next?.addEventListener('click',()=>move(1));prev?.addEventListener('click',()=>move(-1));
  document.querySelector('[data-cv]')?.addEventListener('click',(e)=>{e.preventDefault();alert('Currículo: adicione o PDF para ativar este download.');});
})();

document.querySelectorAll('img[data-b64]').forEach(async (img) => {
  try {
    const res = await fetch(img.dataset.b64);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const b64 = (await res.text()).trim();
    img.src = `data:image/jpeg;base64,${b64}`;
  } catch (err) {
    console.error('Falha ao carregar imagem', img.dataset.b64, err);
  }
});