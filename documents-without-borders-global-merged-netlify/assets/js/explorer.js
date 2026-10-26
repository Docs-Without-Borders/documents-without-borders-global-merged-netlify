/* Country/territory name browser; does not assert treaty or notarial authority status. */
(() => {
  'use strict';
  const input = document.querySelector('#jurisdiction-search');
  const grid = document.querySelector('#jurisdiction-grid');
  const status = document.querySelector('#jurisdiction-status');
  const more = document.querySelector('#load-more');
  if (!input || !grid || !status || !more) return;
  let all = [], filtered = [], limit = 30;
  const draw = () => {
    grid.replaceChildren();
    const fragment = document.createDocumentFragment();
    filtered.slice(0,limit).forEach(item => {
      const card = document.createElement('div'); card.className = 'jurisdiction-item'; card.setAttribute('role','listitem');
      const name = document.createElement('span'); name.textContent = item.name;
      const code = document.createElement('small'); code.textContent = item.code || 'Index entry';
      card.append(name,code); fragment.append(card);
    });
    grid.append(fragment);
    status.textContent = `${filtered.length} ${filtered.length===1?'jurisdiction':'jurisdictions'} in the name index; showing ${Math.min(filtered.length,limit)}.`;
    more.hidden = limit>=filtered.length;
  };
  input.addEventListener('input', () => {
    const term = input.value.trim().toLocaleLowerCase();
    filtered = all.filter(item => item.name.toLocaleLowerCase().includes(term) || (item.code||'').toLocaleLowerCase().includes(term));
    limit=30; draw();
  });
  more.addEventListener('click', () => {limit+=30;draw();});
  fetch('./assets/data/jurisdictions.json').then(response=>{
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  }).then(data=>{
    all = data.jurisdictions || []; filtered=all; draw();
  }).catch(()=> {status.textContent='The country/territory name index could not load. Please consult the official HCCH links below.'; more.hidden=true;});
})();
