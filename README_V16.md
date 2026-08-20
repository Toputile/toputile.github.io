# TopUtile V16 — migration vers toputile.fr

Date : 20/08/2026

## Objectif
Cette version conserve le design V15/V14, le contenu SEO et le moteur multi-marchands. Elle bascule l'identité publique du site de `https://toputile.github.io` vers `https://toputile.fr`.

## Modifications réalisées automatiquement
- Toutes les URL publiques absolues `https://toputile.github.io/...` ont été remplacées par `https://toputile.fr/...` dans les pages HTML, les données structurées, les balises Open Graph, le sitemap et les fichiers texte utiles.
- Les URL canoniques pointent désormais vers `toputile.fr`.
- Le sitemap utilise uniquement `https://toputile.fr/...`.
- `robots.txt` annonce `https://toputile.fr/sitemap.xml`.
- Le fichier `CNAME` contient `toputile.fr` pour préserver le domaine personnalisé GitHub Pages lors des futurs déploiements.
- La page d'accueil déclare le site `TopUtile` avec les données structurées `WebSite` et `Organization` et le logo `https://toputile.fr/logo-toputile-512.png`.
- Les favicons et métadonnées de nom de site ont été uniformisés.
- Le fichier de vérification Search Console `google5e43e8376becc372.html` est inclus.
- `URL_MAPPING_V16.csv` contient la correspondance ancienne URL → nouvelle URL.

## Après mise en ligne
1. Vérifier `https://toputile.fr/`, `https://toputile.fr/robots.txt`, `https://toputile.fr/sitemap.xml` et `https://toputile.fr/google5e43e8376becc372.html`.
2. Vérifier dans GitHub > Settings > Pages que le domaine personnalisé est toujours `toputile.fr` et que `Enforce HTTPS` est activé.
3. Ajouter `https://toputile.fr/` dans Google Search Console et vérifier la propriété.
4. Envoyer le sitemap `sitemap.xml` dans la nouvelle propriété.
5. Depuis l'ancienne propriété `https://toputile.github.io/`, utiliser si disponible `Paramètres > Changement d'adresse` vers la nouvelle propriété une fois les redirections validées.
6. Conserver l'ancienne propriété Search Console pour suivre la migration ; ne pas la supprimer.

Aucune modification DNS IONOS n'est nécessaire si `toputile.fr` et `www.toputile.fr` fonctionnent déjà en HTTPS.
