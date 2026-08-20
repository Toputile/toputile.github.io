# ADMIN — Activer un nouveau marchand Awin

La V12 est conçue pour éviter de refaire le site à chaque acceptation d'un marchand.

## Fichiers importants
- `assets/js/merchant-data.js` : activation des marchands + offres par produit.
- `assets/js/merchant-offers.js` : moteur de classement/affichage. Ne pas modifier normalement.
- `assets/js/affiliate-links.js` : liens Amazon actuels.

## Quand Rakuten / Cdiscount / Fnac / Darty accepte TopUtile
1. Ouvrir `assets/js/merchant-data.js`.
2. Passer le marchand concerné de `enabled: false` à `enabled: true`.
3. Ajouter uniquement les produits pour lesquels un lien tracké existe.

Exemple :
```js
window.TOPUTILE_MERCHANT_OFFERS = {
  "noco-gb40": {
    rakuten: {
      url: "LIEN_AWIN_TRACKÉ_VERS_LE_PRODUIT",
      price: 89.99,
      shipping: 0,
      availability: "En stock",
      updatedAt: "2026-08-20T09:00:00+02:00",
      source: "Flux Awin Rakuten"
    }
  }
};
```

Si le prix n'est pas fourni par une source autorisée, mettre `price: null` et `shipping: null`.

## Ce qui se met à jour automatiquement
- les fiches produit dynamiques ;
- les 50 pages SEO dans `/produits/` ;
- le nombre de marchands affiché ;
- le filtre « Marchand disponible » dans le catalogue ;
- l'offre mise en avant sur les fiches dynamiques ;
- le badge « meilleur prix référencé » uniquement quand au moins deux prix complets sont connus.
