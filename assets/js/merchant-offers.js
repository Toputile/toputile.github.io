(function(){
  const TAG='toputile01-21';
  const fmtPrice=v=>typeof v==='number'&&Number.isFinite(v)?new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(v):null;
  const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const products=()=>window.TOPUTILE_PRODUCTS||[];
  const product=id=>products().find(p=>p.id===id);
  function amazonUrl(id,query){
    const direct=(window.AFFILIATE_LINKS||{})[id];
    if(direct&&String(direct).trim()) return String(direct).trim();
    const p=product(id);
    if(p&&p.asin) return `https://www.amazon.fr/dp/${encodeURIComponent(p.asin)}?tag=${TAG}`;
    const q=query||(p&&p.query)||'';
    return 'https://www.amazon.fr/s?k='+encodeURIComponent(q)+'&tag='+TAG;
  }
  function merchants(){return window.TOPUTILE_MERCHANTS||{}}
  function extraOffers(){return window.TOPUTILE_MERCHANT_OFFERS||{}}
  function activeMerchants(){return Object.values(merchants()).filter(m=>m.enabled).sort((a,b)=>(a.priority||99)-(b.priority||99))}
  function getOffers(id,query){
    const out=[];
    const ms=merchants();
    if(ms.amazon&&ms.amazon.enabled){
      out.push({merchant:ms.amazon,url:amazonUrl(id,query),price:null,shipping:null,total:null,availability:'À vérifier chez le marchand',updatedAt:null,source:'Amazon Partenaires'});
    }
    const data=extraOffers()[id]||{};
    Object.entries(data).forEach(([mid,o])=>{
      const m=ms[mid];
      if(!m||!m.enabled||!o||!o.url) return;
      const price=typeof o.price==='number'?o.price:null;
      const shipping=typeof o.shipping==='number'?o.shipping:null;
      const total=price!==null?(price+(shipping||0)):null;
      out.push({merchant:m,url:o.url,price,shipping,total,availability:o.availability||'À vérifier chez le marchand',updatedAt:o.updatedAt||null,source:o.source||m.network});
    });
    out.sort((a,b)=>{
      if(a.total!==null&&b.total!==null&&a.total!==b.total) return a.total-b.total;
      if(a.total!==null&&b.total===null) return -1;
      if(a.total===null&&b.total!==null) return 1;
      return (a.merchant.priority||99)-(b.merchant.priority||99);
    });
    return out;
  }
  function bestPriced(offers){const p=offers.filter(o=>o.total!==null); return p.length>=2?p[0]:null}
  function countLabel(n){return n+' offre'+(n>1?'s':'')+' référencée'+(n>1?'s':'')}
  function row(o,best){
    const price=fmtPrice(o.price), ship=o.shipping===0?'Livraison incluse':fmtPrice(o.shipping), total=fmtPrice(o.total);
    const isBest=best&&best===o;
    return `<tr class="merchant-offer-row${isBest?' merchant-best':''}">
      <td><div class="merchant-brand"><span class="merchant-dot" style="--merchant-color:${esc(o.merchant.accent||o.merchant.color||'#334155')}"></span><div><strong>${esc(o.merchant.name)}</strong><small>${esc(o.merchant.disclosure||o.merchant.network||'Marchand partenaire')}</small></div></div></td>
      <td>${price?`<strong class="merchant-price">${price}</strong>${ship?`<small>${ship}</small>`:''}`:'<strong>Voir le prix</strong><small>Prix vérifié chez le marchand</small>'}${isBest?'<span class="best-price-badge">Meilleur prix référencé</span>':''}</td>
      <td><span class="availability-dot"></span>${esc(o.availability||'À vérifier')}</td>
      <td><a class="btn btn-primary btn-small" href="${esc(o.url)}" target="_blank" rel="nofollow sponsored noopener">Voir l’offre</a></td>
    </tr>`;
  }
  function tableHtml(id,query){
    const offers=getOffers(id,query), best=bestPriced(offers);
    return `<div class="merchant-offers-head"><div><strong>${countLabel(offers.length)}</strong><span>Les prix et disponibilités sont vérifiés chez les marchands.</span></div>${offers.length>1?'<span class="multi-ready-badge">Comparaison multi-marchands</span>':''}</div>
      <div class="merchant-table-wrap"><table class="offer-table merchant-table"><thead><tr><th>Marchand</th><th>Prix</th><th>Disponibilité</th><th></th></tr></thead><tbody>${offers.map(o=>row(o,best)).join('')}</tbody></table></div>
      <p class="micro merchant-method">TopUtile n’invente pas de prix. Lorsqu’au moins deux prix complets sont disponibles, les offres sont classées par prix total connu (produit + livraison connue). Sinon, aucune offre n’est présentée comme moins chère.</p>`;
  }
  function bestHtml(id,query){
    const offers=getOffers(id,query), best=bestPriced(offers), o=best||offers[0];
    if(!o) return '<div class="price-empty"><strong>Aucune offre active</strong></div>';
    const total=fmtPrice(o.total);
    return `<div class="merchant-box merchant-best-box"><div class="best-kicker">${best?'Meilleur prix référencé':'Offre disponible'}</div><div class="merchant-name">${esc(o.merchant.name)}</div><div class="merchant-sub">${total?`Prix total connu : <strong>${total}</strong>`:'Prix et disponibilité à vérifier chez le marchand.'}</div><a class="btn btn-primary" href="${esc(o.url)}" target="_blank" rel="nofollow sponsored noopener">Voir l’offre →</a><p class="tiny-note">Lien rémunéré : TopUtile peut percevoir une commission sur un achat éligible.</p></div>`;
  }
  function summaryHtml(id,query){
    const offers=getOffers(id,query); const names=offers.map(o=>o.merchant.name).join(' · ');
    return `<div><strong>${countLabel(offers.length)}</strong><small>${esc(names||'Aucun marchand')}</small></div>`;
  }
  function hydrate(root=document){
    root.querySelectorAll('.merchant-offers-widget[data-offers-for]').forEach(el=>{el.innerHTML=tableHtml(el.dataset.offersFor,el.dataset.query||'')});
    root.querySelectorAll('.merchant-best-widget[data-offers-for]').forEach(el=>{el.innerHTML=bestHtml(el.dataset.offersFor,el.dataset.query||'')});
    root.querySelectorAll('.merchant-summary-widget[data-offers-for]').forEach(el=>{el.innerHTML=summaryHtml(el.dataset.offersFor,el.dataset.query||'')});
  }
  function hasOffer(id,merchantId){return getOffers(id).some(o=>o.merchant.id===merchantId)}
  window.TopUtileMerchants={getOffers,activeMerchants,hasOffer,tableHtml,bestHtml,summaryHtml,hydrate,countLabel};
  document.addEventListener('DOMContentLoaded',()=>hydrate(document));
})();
