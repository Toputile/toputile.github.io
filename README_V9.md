# TopUtile V9 — catalogue Auto & Moto 50 produits

Cette version conserve le design V8 et augmente le catalogue à **50 références Auto & Moto**.

## Automatisation des liens Amazon
Le site utilise désormais trois niveaux :
1. un lien SiteStripe direct s’il est déjà renseigné dans `affiliate-links.js` ;
2. sinon un lien direct `/dp/ASIN` avec `tag=toputile01-21` si l’ASIN est connu dans `products.js` ;
3. sinon une recherche Amazon ciblée avec le même tag.

Ainsi, l’ajout futur d’un produit avec son ASIN ne nécessite plus de créer manuellement un lien Partenaire dans le code.

## Catalogue
Le catalogue comprend désormais notamment :
- dashcams Garmin, 70mai et VIOFO ;
- boosters et chargeurs NOCO / CTEK ;
- intercoms Cardo / Sena ;
- supports SP Connect ;
- entretien moto Motul ;
- ainsi que les 20 références de la V8.

## Photos
Les nouvelles fiches utilisent des visuels correspondant aux références citées, provenant en priorité des fabricants. Si une image distante devient indisponible, le site affiche un fallback local au lieu d'une image cassée.

## Mise en ligne
1. GitHub → `toputile.github.io`
2. Ajouter un fichier → Téléverser des fichiers
3. Envoyer tout le contenu de V9
4. Commit changes
5. `Ctrl + F5` sur `https://toputile.fr/`