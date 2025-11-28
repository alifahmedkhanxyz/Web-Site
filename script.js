// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});}
  });
});

// Skill bars animation
const onVisible=(el, cb)=>{
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{if(en.isIntersecting){cb(en.target); io.disconnect();}});
  },{threshold:.3}); io.observe(el);
};
document.querySelectorAll('.bar .fill').forEach(fill=>{
  onVisible(fill, (node)=>{
    const w=node.style.getPropertyValue('--val')||'80%';
    node.animate([{width:'0%'},{width:w}],{duration:900, easing:'ease-out', fill:'forwards'});
  });
});

// Typing effect
const lines=[
  'I create cracked montages, stream competitive matches, and build gaming communities.',
  'Editor • Streamer • IGL — let\'s push rank together.',
  'Available for thumbnails, edits, and tourney hosting.'
];
let li=0, pos=0, rev=false, el=document.getElementById('type');
setInterval(()=>{
  const txt=lines[li];
  if(!rev){ pos++; if(pos>=txt.length+6){rev=true} }
  else{ pos--; if(pos<=0){rev=false; li=(li+1)%lines.length} }
  el.textContent=txt.slice(0, Math.max(0,pos));
},38);

// Cursor glow
const cursor=document.getElementById('cursor');
window.addEventListener('pointermove', (e)=>{
  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Glow toggle
document.getElementById('glowToggle').addEventListener('input',(e)=>{
  const v=e.target.value;
  cursor.style.opacity = (v/100).toString();
});

// Fake CV download
document.getElementById('dl-cv').addEventListener('click', (e)=>{
  e.preventDefault();
  alert('Add your real CV link to the #dl-cv anchor\'s href attribute.');
});

// Neon shimmer effect for projects
document.querySelectorAll('.project .thumb').forEach(thumb=>{
  thumb.addEventListener('mousemove', e=>{
    const x = e.offsetX / thumb.offsetWidth;
    const y = e.offsetY / thumb.offsetHeight;
    thumb.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, var(--neon2) 0%, var(--neon) 50%, var(--panel) 100%)`;
  });
  thumb.addEventListener('mouseleave', ()=>{
    thumb.style.background = 'linear-gradient(45deg,var(--neon),var(--neon2))';
  });
});
