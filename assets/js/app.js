
function amazonFallback(query){return 'https://www.amazon.fr/s?k='+encodeURIComponent(query)}
function affiliateUrl(id,query){const x=(window.AFFILIATE_LINKS||{})[id];return x&&x.trim()?x.trim():amazonFallback(query)}
function bindAmazonLinks(){document.querySelectorAll('[data-product-id]').forEach(a=>{a.href=affiliateUrl(a.dataset.productId,a.dataset.query||'');a.target='_blank';a.rel='nofollow sponsored noopener';});}
function initFilters(){const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.product-card'), input=document.querySelector('#productSearch');let cat='Tous';function run(){const q=(input?.value||'').toLowerCase();cards.forEach(c=>{const matchCat=cat==='Tous'||c.dataset.category===cat;const matchQ=!q||c.textContent.toLowerCase().includes(q);c.style.display=matchCat&&matchQ?'flex':'none';});}filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));b.classList.add('active');cat=b.dataset.category;run();}));input?.addEventListener('input',run);}
document.addEventListener('DOMContentLoaded',()=>{bindAmazonLinks();initFilters();});
