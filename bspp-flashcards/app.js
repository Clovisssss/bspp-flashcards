const $=s=>document.querySelector(s), app=$('#app'), title=$('#title'), back=$('#back');
const KEY='bspp-progress-v1';
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}};
const save=p=>{try{localStorage.setItem(KEY,JSON.stringify(p))}catch(e){}};
const id=c=>CARDS.indexOf(c);
const INT=[0,1,2,4,8,16]; // jours par boîte Leitner
let nav=()=>{}; 
function setView(t,onBack){title.textContent=t;back.hidden=!onBack;nav=onBack||(()=>{});window.scrollTo(0,0)}
back.onclick=()=>nav();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function home(){
  setView('BSPP Flashcards');
  const p=load(),known=CARDS.filter((c,i)=>(p[i]?.box||0)>=4).length;
  app.innerHTML=`<div class="tiles">
  <button class="tile" id="q"><span class="i">🃏</span><div><b>Questions</b><small>${CARDS.length} flashcards · ${known} maîtrisées</small></div></button>
  <button class="tile" id="d"><span class="i">📚</span><div><b>Documentation</b><small>${DOCS.length} fiches illustrées</small></div></button></div>
  <p class="sub" style="text-align:center;margin-top:24px">Fonctionne hors ligne · progression sauvegardée sur l'appareil</p>`;
  $('#q').onclick=qSetup;$('#d').onclick=()=>docList();
}
let sel=new Set(),mode='due';
function qSetup(){
  setView('Questions',home);
  const p=load(),now=Date.now();
  const due=i=>!p[i]||(p[i].next||0)<=now;
  const count=t=>CARDS.filter((c,i)=>c.t===t&&(mode==='all'||due(i))).length;
  app.innerHTML=`<p class="sub">Choisis les thèmes :</p><div class="chips">${THEMES.map(t=>`<button class="chip ${sel.has(t.id)?'on':''}" data-t="${t.id}">${t.ico} ${t.nom} (${count(t.id)})</button>`).join('')}</div>
  <div class="chips"><button class="chip ${mode==='due'?'on':''}" data-m="due">À réviser</button><button class="chip ${mode==='all'?'on':''}" data-m="all">Toutes</button></div>
  <button class="prim" id="go">Commencer</button><button class="prim" id="rst" style="background:#666">Réinitialiser la progression</button>`;
  app.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{const t=b.dataset.t;sel.has(t)?sel.delete(t):sel.add(t);qSetup()});
  app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{mode=b.dataset.m;qSetup()});
  $('#rst').onclick=()=>{if(confirm('Effacer toute la progression ?')){save({});qSetup()}};
  $('#go').onclick=()=>{
    const idx=CARDS.map((c,i)=>i).filter(i=>(!sel.size||sel.has(CARDS[i].t))&&(mode==='all'||due(i)));
    if(!idx.length){alert('Aucune carte à réviser : bravo ! Choisis « Toutes ».');return}
    idx.sort(()=>Math.random()-.5);run(idx)};
}
function run(idx){
  let k=0,good=0;
  const show=()=>{
    if(k>=idx.length){setView('Résultat',qSetup);app.innerHTML=`<h2>Session terminée</h2><p>${good} / ${idx.length} cartes sues.</p><div class="bar"><i style="width:${Math.round(good/idx.length*100)}%"></i></div><button class="prim" id="h">Retour</button>`;$('#h').onclick=qSetup;return}
    const c=CARDS[idx[k]],th=THEMES.find(t=>t.id===c.t);
    setView(`${k+1} / ${idx.length}`,qSetup);
    app.innerHTML=`<div class="bar"><i style="width:${k/idx.length*100}%"></i></div>
    <div class="flip"><div class="card" id="card"><div class="face"><span class="tag">${th.ico} ${th.nom}</span>${c.img?`<img src="${c.img}" alt="">`:''}<div>${esc(c.q)}</div><small class="sub">Touche pour voir la réponse</small></div>
    <div class="face b"><span class="tag">Réponse</span><div>${esc(c.a)}</div></div></div></div>
    <div class="acts" id="acts" hidden><button class="ko" id="ko">À revoir</button><button class="ok" id="ok">Je savais</button></div>`;
    $('#card').onclick=()=>{$('#card').classList.toggle('f');$('#acts').hidden=false};
    const rate=g=>{const p=load(),i=idx[k],b=g?Math.min((p[i]?.box||0)+1,5):1;p[i]={box:b,next:Date.now()+INT[b]*864e5};save(p);if(g)good++;k++;show()};
    $('#ok').onclick=()=>rate(true);$('#ko').onclick=()=>rate(false);
  };show();
}
function docList(q=''){
  setView('Documentation',home);
  const f=DOCS.filter(d=>(d.titre+d.html).toLowerCase().includes(q.toLowerCase()));
  app.innerHTML=`<input type="search" id="s" placeholder="Rechercher…" value="${esc(q)}">`+f.map(d=>`<button class="row" data-d="${d.id}">${THEMES.find(t=>t.id===d.t).ico} <b>${d.titre}</b></button>`).join('');
  $('#s').oninput=e=>{docList(e.target.value);const s=$('#s');s.focus();s.setSelectionRange(s.value.length,s.value.length)};
  app.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>docView(b.dataset.d));
}
function docView(i){
  const d=DOCS.find(x=>x.id===i);setView(d.titre,()=>docList());
  app.innerHTML=`<article class="doc"><h2>${d.titre}</h2>${d.img?`<img src="${d.img}" alt="">`:''}${d.html}${d.gal?`<div class="gal">${d.gal.map(s=>`<img src="${s}" alt="">`).join('')}</div>`:''}</article>`;
}
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
home();
