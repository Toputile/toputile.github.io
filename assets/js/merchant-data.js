// TopUtile V12 — configuration multi-marchands.
// IMPORTANT : seuls les marchands enabled:true sont visibles publiquement.
// Rakuten, Cdiscount, Fnac et Darty sont préparés mais restent invisibles jusqu'à validation et ajout d'une offre trackée.
window.TOPUTILE_MERCHANTS = {
  amazon: {
    id: 'amazon', name: 'Amazon.fr', network: 'Amazon Partenaires', enabled: true,
    color: '#111827', accent: '#ff9900', priority: 10,
    disclosure: 'Lien Partenaire Amazon'
  },
  rakuten: {
    id: 'rakuten', name: 'Rakuten', network: 'Awin', enabled: false,
    color: '#bf0000', accent: '#bf0000', priority: 20,
    disclosure: 'Lien affilié Awin'
  },
  cdiscount: {
    id: 'cdiscount', name: 'Cdiscount', network: 'Awin', enabled: false,
    color: '#174a91', accent: '#174a91', priority: 30,
    disclosure: 'Lien affilié Awin'
  },
  fnac: {
    id: 'fnac', name: 'Fnac', network: 'Awin', enabled: false,
    color: '#111827', accent: '#f6b800', priority: 40,
    disclosure: 'Lien affilié Awin'
  },
  darty: {
    id: 'darty', name: 'Darty', network: 'Awin', enabled: false,
    color: '#e30613', accent: '#e30613', priority: 50,
    disclosure: 'Lien affilié Awin'
  }
};

// Données multi-marchands par produit.
// Exemple à utiliser après acceptation Awin :
// "noco-gb40": {
//   rakuten: { url: "TON_LIEN_AWIN", price: 89.99, shipping: 0, availability: "En stock", updatedAt: "2026-08-20T08:00:00+02:00" }
// }
// Ne jamais inventer de prix : laisser price:null si le flux autorisé ne fournit pas de prix fiable.
window.TOPUTILE_MERCHANT_OFFERS = {
};
