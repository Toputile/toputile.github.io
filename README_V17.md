# TopUtile V17 — Correction Google Extraits de produits

Cette version part de la V16 et corrige le message Search Console :

> Il faut indiquer `offers`, `review`, ou `aggregateRating`.

## Correction appliquée
- Suppression du balisage JSON-LD `Product` incomplet sur les fiches produits.
- Aucun faux prix, faux avis ou fausse note n’a été ajouté.
- Les pages produits restent en ligne et indexables normalement.
- Les données structurées `BreadcrumbList` sont conservées.
- Le domaine `https://toputile.fr` et le fichier `CNAME` sont conservés.
- Sitemap et URLs restent inchangés.

## Plus tard
Lorsque TopUtile disposera de prix réels provenant des flux marchands/Awin, le schéma `Product` pourra être réactivé avec de vraies propriétés `offers`.
