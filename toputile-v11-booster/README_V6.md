# TopUtile V6 — comparateur enrichi

Cette version rapproche TopUtile du fonctionnement d’un grand comparateur de prix tout en gardant une identité propre et en restant honnête sur les données réellement disponibles.

## Ce qui change

- Nouvelle page d’accueil orientée recherche et comparaison.
- 11 grands univers et plus de 180 sous-catégories navigables.
- Nouvelle page `categories.html` avec toute l’arborescence.
- Catalogue `products.html` en lignes compactes : photo, marque, sous-catégorie, caractéristiques, nombre d’offres, marchand et bouton.
- Filtres dynamiques par catégorie, marque et usage.
- Tri par popularité TopUtile, nom et marque.
- Recherche avec suggestions de produits, catégories et sous-catégories.
- Ma sélection / favoris conservés dans le navigateur.
- Comparaison jusqu’à 3 produits côte à côte.
- Fiches produit : grande photo, détails, points forts, limites, offre marchand, emplacement d’évolution de prix et alerte prix.
- Vraies photographies ou images officielles de produit à la place des illustrations emoji.
- Page Sources mise à jour avec les crédits photo.
- Tous les liens Amazon Partenaires déjà configurés sont conservés.

## Limites actuelles importantes

TopUtile n’est pas encore connecté à des flux de prix multi-marchands.

Aujourd’hui :
- Amazon.fr est le marchand connecté.
- Le prix est consulté sur la fiche du marchand.
- L’alerte prix enregistre un objectif localement mais n’envoie pas encore de notification automatique.
- L’historique de prix n’affiche aucune fausse courbe.
- Les catégories sans produit référencé restent accessibles et sont prêtes à être alimentées.

Pour obtenir un comparateur complet avec prix automatiques, classement par prix total, disponibilité, livraison, historique et alertes réelles, il faudra ensuite connecter des API/flux marchands autorisés et un petit backend.

## Mise en ligne

1. Décompresser `toputile-v6.zip`.
2. Sur GitHub, ouvrir le dépôt `toputile.github.io`.
3. `Ajouter un fichier` → `Téléverser des fichiers`.
4. Envoyer tout le contenu du dossier V6 à la racine.
5. Valider avec `Commit changes`.
6. Attendre le déploiement GitHub Pages.
7. Ouvrir `https://toputile.github.io/` puis effectuer un rechargement forcé si besoin.

## Fichiers principaux

- `index.html` : accueil
- `categories.html` : arborescence catégories / sous-catégories
- `products.html` : catalogue et filtres
- `product.html` : fiche produit
- `assets/js/categories.js` : arborescence des catégories
- `assets/js/products.js` : catalogue produits et photos
- `assets/js/affiliate-links.js` : liens Amazon Partenaires
- `assets/js/app.js` : recherche, filtres, favoris, comparaison, fiches et alertes
- `assets/css/style.css` : design V6

