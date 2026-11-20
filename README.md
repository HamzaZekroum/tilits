# Til Its Cover — export du site EPK

Le dossier `dist/` contient le site statique complet et ses sources. Il est prêt à publier tel quel. Le site utilise HTML, CSS et JavaScript natif. Il fonctionne sans installation de dépendances, sans étape de compilation, sans base de données et sans compte ChatGPT.

## Contenu

- `dist/index.html` et `dist/en.html` contiennent les pages française et anglaise, les textes et les liens.
- `dist/style.css` contient la mise en page, les couleurs et les styles communs aux deux langues.
- `dist/gallery.js` gère l’agrandissement et la navigation des photos.
- `dist/clips.js` gère le lecteur et la navigation des extraits vidéo.
- `dist/photos/` contient les 20 photos de galerie et leurs 20 miniatures. La 21e photo, `dist/til-its-cover-live.jpg`, sert également de photo d’accueil.
- `dist/clips/` contient les huit extraits MP4 optimisés du site et leurs huit vignettes. `dist/teaser.webp` est la vignette du teaser YouTube.
- Le nom du groupe est composé en HTML et CSS. Les icônes de réseaux sociaux sont intégrées en SVG dans les pages.

Le teaser officiel est un lien vers YouTube. Les liens YouTube, Instagram, Facebook et le bouton de composition Gmail nécessitent une connexion Internet. L’adresse de booking est aussi proposée comme lien e-mail pour l’application de messagerie de l’utilisateur.

## Tester localement

Décompressez le ZIP. Depuis le dossier qui contient ce README, lancez avec Python 3 installé :

```bash
python3 -m http.server 8000 --directory dist
```

Ouvrez [http://localhost:8000/](http://localhost:8000/) et vérifiez le sélecteur FR / EN, la galerie photo et les extraits vidéo. Sur Windows, vous pouvez utiliser `py -m http.server 8000 --directory dist` si `python3` est indisponible.

## Publier sur Netlify

1. Décompressez le ZIP.
2. Dans [Netlify Drop](https://app.netlify.com/drop), déposez le dossier `dist` lui-même. Il doit contenir directement `index.html`.
3. Ouvrez l’adresse de déploiement fournie et vérifiez les deux langues, l’ouverture des photos et la lecture d’un extrait. Pour une mise à jour manuelle, déposez le dossier `dist` actualisé dans l’onglet **Deploys** du même projet.

[Guide Netlify Drop](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/)

## Publier sur Cloudflare Pages

1. Dans **Workers & Pages**, créez un projet **Pages** avec **Direct Upload**.
2. Déposez le dossier `dist` décompressé, puis lancez le déploiement. Les fichiers de cet export sont chacun sous la limite de 25 Mio par fichier de Pages.
3. Vérifiez les deux langues et les médias depuis l’adresse fournie. Pour une mise à jour, téléversez le dossier `dist` actualisé dans le même projet.

[Guide Cloudflare Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## Modifier le site et connecter un domaine

- Modifiez les textes ou liens dans les deux pages HTML. Les couleurs principales sont définies au début de `style.css`.
- Pour ajouter une photo ou un extrait, ajoutez le média et sa miniature, puis dupliquez dans les deux pages une entrée `data-photo` ou `data-clip`. Adaptez la légende accessible et, pour un clip, la durée affichée.
- Ajoutez votre domaine dans le tableau de bord de votre hébergeur, puis appliquez les enregistrements DNS qu’il vous donne. Si le domaine sert déjà à la messagerie, conservez les enregistrements liés à celle-ci.
- Après publication, remplacez si souhaité les URL relatives des deux déclarations `hreflang` par les URL absolues des pages du nouveau domaine. Pour rétablir l’image des aperçus de partage, ajoutez dans chaque page `<meta property="og:image" content="https://votre-domaine.example/til-its-cover-live.jpg">` en remplaçant le domaine d’exemple.

Les réglages privés de publication propres à ChatGPT Sites ne font pas partie de ce paquet statique. La copie conserve les médias web incorporés au site. Les originaux du Drive et le fichier vidéo du teaser YouTube ne sont pas nécessaires à son fonctionnement.
