const Memory = {
  gallery: [],
  surveySubmits: []
};
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'gallery') initGalleryPage();
  if (page === 'survey') initSurveyPage();
});
function seedGalleryOnce(){
  if (Memory.gallery.length) return;
  const items = [
    {title:'Schlossplatz', url:'https://placesofgermany.de/wp-content/uploads/2023/04/Stuttgart-Schlossplatz-1.webp'},
    {title:'Mercedes-Benz Museum', url:'https://www.mercedes-benz.com/content/dam/brandhub/assets/art-and-culture/mercedes-benz-museum/museum/01-mercedes-benz-museum-header-5120x2880.jpg/_jcr_content/renditions/image-crop-default.jpeg/1761299547764.jpg?im=Resize=(2560);Crop,rect=(0,0,2560,1440)'},
    {title:'Porsche Museum', url:'https://www.allaboutlean.com/wp-content/uploads/2025/02/Porsche-MuseumZuffenhausen--768x578.jpg'},
    {title:'Fernsehturm Stuttgart', url:'https://mlw.baden-wuerttemberg.de/fileadmin/_processed_/3/f/csm_2023-12-04_Welterbe_Tentativliste_Fernsehturm_2434x1310_fd04f652a4.jpg'},
    {title:'Wilhelma Zoo & Botanical Garden', url:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Wilhelma_Maurisches_Landhaus_qtl1.jpg'},
    {title:'Staatsgalerie', url:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Neue_Staatsgalerie_Stuttgart_2014_01.jpg'},
    {title:'Königstraße', url:'https://presse.stuttgart-tourist.de/_Resources/Persistent/6/6/3/a/663a15b637bf224320644be9e5896fcb9165ac89/Cover_Koenigstrasse_c_SMG_Sarah_Schmid.jpg'},
    {title:'Neues Schloss', url:'https://mediaim.expedia.com/destination/1/0c5fc82d6fc2af33d39bae9909e50f41.jpg'},
    {title:'Markthalle', url:'https://www.markthalle-stuttgart.de/fileadmin/user_upload/markthalle_stuttgart_banner_start_3.jpg'},
    {title:'Stiftskirche', url:'https://placesofgermany.de/wp-content/uploads/2023/04/Stuttgart-Stiftskirche.webp'}
  ];
  Memory.gallery = items.map((it, i) => ({ id: 'g'+(i+1), likes: 0, ...it }));
}
function initGalleryPage(){
  seedGalleryOnce();
  const grid = document.getElementById('galleryGrid');
  renderGallery(grid);
}
function renderGallery(grid){
  grid.innerHTML = '';
  Memory.gallery.forEach(item=>{
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.url}" class="card-img-top" alt="${escapeHtml(item.title)}" role="button" data-view="${item.id}">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h6 class="mb-0">${escapeHtml(item.title)}</h6>
          <button class="btn btn-sm btn-outline-primary" data-like="${item.id}">👍 <span>${item.likes}</span></button>
        </div>
      </div>`;
    grid.appendChild(col);
  });
  grid.querySelectorAll('[data-like]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-like');
      const it = Memory.gallery.find(x=>x.id===id);
      if (!it) return;
      it.likes++;
      btn.querySelector('span').textContent = it.likes;
    });
  });
  const modal = new bootstrap.Modal('#lightbox');
  grid.querySelectorAll('[data-view]').forEach(img=>{
    img.addEventListener('click', ()=>{
      document.getElementById('lightboxImg').src = img.src;
      document.getElementById('lightboxCaption').textContent = img.alt;
      modal.show();
    });
  });
}
function initSurveyPage(){
  const form = document.getElementById('surveyForm');
  const out = document.getElementById('submissions');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
    const fd = new FormData(form);
    const entry = Object.fromEntries(fd.entries());
    Memory.surveySubmits.unshift({ time: new Date().toLocaleString(), ...entry });
    form.reset();
    form.classList.remove('was-validated');
    renderSubmissions(out);
  });
  renderSubmissions(out);
}
function renderSubmissions(container){
  container.innerHTML = '';
  Memory.surveySubmits.forEach(sub=>{
    const el = document.createElement('div');
    el.className = 'col-12';
    el.innerHTML = `
      <div class="card submission shadow-sm">
        <div class="card-body">
          <div class="row g-3 align-items-start">
            ${kv('Оцена', sub.siteRating)}
            ${kv('Бил/а во Stuttgart', sub.visited)}
            ${kv('Тип атракција', sub.favType)}
            ${kv('Возраст', sub.age || '—')}
            ${kv('Препорака', sub.recommend)}
            ${kv('Денови', sub.days || '—')}
            ${commentBlock(sub.comment)}
          </div>
        </div>
      </div>`;
    container.appendChild(el);
  });
  function kv(label, value){
    return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="submission-kv">
          <div class="submission-label">${escapeHtml(label)}</div>
          <div class="submission-value">${escapeHtml(String(value))}</div>
        </div>
      </div>`;
  }
  function commentBlock(text){
    const v = String(text || '—').trim();
    return `
      <div class="col-12">
        <div class="submission-kv">
          <div class="submission-label">Коментар</div>
          <div class="submission-value">${escapeHtml(v)}</div>
        </div>
      </div>`;
  }
}
function escapeHtml(s){
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
