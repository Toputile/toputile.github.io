# TopUtile V4 — comparateur fonctionnel

Cette version reprend les grands principes fonctionnels d'un comparateur moderne, sans copier la marque, le code ni la présentation d'un autre site.

## Fonctionne dès maintenant
- Recherche centrale avec suggestions.
- Catalogue de produits.
- Filtres par catégorie et usage.
- Tri des produits.
- Favoris / « Ma sélection » enregistrés dans le navigateur.
- Comparaison de 2 à 3 produits côte à côte.
- Fiches produits détaillées.
- Boutons Amazon avec les liens Partenaires déjà présents dans `assets/js/affiliate-links.js`.
- Prix cible / alertes enregistrées localement sur l'appareil.
- Pages guides déjà existantes.

## Préparé mais nécessite une source de données externe
Pour atteindre le niveau d'un grand comparateur de prix, il faudra connecter :
- plusieurs marchands (programmes d'affiliation / flux produits / API) ;
- prix actuels fiables ;
- frais de livraison ;
- disponibilité ;
- historique des prix ;
- alertes automatiques par e-mail ou notification ;
- éventuellement un vrai compte utilisateur côté serveur.

TopUtile n'affiche volontairement pas de faux prix ni de fausse courbe d'historique.

## Mise en ligne
1. Ouvrir le dépôt GitHub `toputile.github.io`.
2. Ajouter / téléverser tout le contenu de ce dossier à la racine du dépôt.
3. Valider avec `Commit changes`.
4. Attendre le déploiement GitHub Pages.
5. Ouvrir `https://toputile.github.io/` puis faire `Ctrl + F5` si l'ancienne version reste en cache.

## Fichiers principaux
- `index.html` : accueil.
- `products.html` : catalogue + filtres.
- `product.html?id=...` : fiche produit dynamique.
- `selection.html` : favoris.
- `alertes.html` : prix cibles enregistrés.
- `assets/js/products.js` : catalogue de produits.
- `assets/js/affiliate-links.js` : liens d'affiliation.
- `assets/js/app.js` : recherche, favoris, comparaison, alertes.
