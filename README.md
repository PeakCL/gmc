# Site vitrine Gilly Motorsport Club

Site statique (HTML, CSS, JS, aucune dépendance), prévu pour un hébergement Netlify.
Conception et communication : PeakCL.

## Structure

```
index.html              page principale (sections : projet, équipage, partenaires, programme, soirée, Instagram, contact)
merci.html              page de confirmation après envoi du formulaire
css/style.css           styles (couleurs du club : blanc, rouge, noir)
js/main.js              menu mobile + formulaire
assets/img/             logo, favicon, photos équipage
assets/partenaires/     logos partenaires
netlify.toml            config Netlify (en-têtes de sécurité, cache)
robots.txt              bloque l'indexation tant que le site n'est pas publié
```

Les contenus manquants sont repérés dans `index.html` par la classe `tbd` (pointillés rouges).
Rechercher `class="tbd"` pour tous les retrouver.

## Contenus

Sources : pressbook « GMC_Pressbook_Sponsoring_2027 » (équipage, voiture, programme, packs, budget, fiscalité) et photos fournies.
Logo : extrait du pressbook en PNG (`assets/img/logo-gmc.png`, `logo-gmc-blanc.png`). Le remplacer par le SVG officiel dès réception.

### À recevoir ou valider avec Sébastien

- [ ] Vidéo du hero : télécharger la vidéo retenue (Pexels), la compresser (1080p, sans son, 15 s max, idéalement moins de 6 Mo) et la déposer en `assets/video/hero.mp4`. Renseigner le crédit dans les mentions légales
- [ ] Photo de l'équipe d'assistance : confirmer qu'il s'agit de vraies personnes du team, sinon la remplacer par une vraie photo
- [ ] Logos et accord des partenaires confirmés (le pressbook en montre plusieurs, aucun n'est publié sans validation)
- [ ] Publication du budget détaillé et du numéro de Sébastien sur le site public
- [ ] Soirée du 22 janvier 2027 : lieu, horaire, inscription
- [ ] E-mail qui reçoit les messages du formulaire (notification Netlify)
- [x] Lien de la Page Facebook
- [ ] Adresse du siège et nom du président (mentions légales)

## Mise en ligne (une fois le domaine pris par le club)

1. Domaine acheté et détenu au nom de l'association.
2. Créer le site sur Netlify, déployer ce dossier.
3. Brancher le domaine dans Netlify (DNS), HTTPS automatique.
4. Netlify Forms : activer la détection des formulaires (Site configuration > Forms), vérifier que le formulaire « contact » apparaît dans l'onglet Forms et configurer la notification par e-mail vers l'adresse du club.
5. Dans `js/main.js`, remplacer `gillymotorsport` par le vrai domaine dans le test du formulaire.
6. Retirer `<meta name="robots" content="noindex">` de `index.html` et passer `robots.txt` en `Allow: /`.
7. Compléter l'hébergeur dans les mentions légales.
8. Fil Instagram (Elfsight) : Sébastien crée le widget « Instagram Feed » sur un compte Elfsight au nom du club, le connecte à @gillymotorsportclub et transmet l'identifiant du widget (la partie après `elfsight-app-` dans le code d'intégration). Le coller dans `data-app-id` de `#insta-feed` dans `index.html`. Ajouter le domaine dans les réglages Elfsight si demandé.
9. Ajouter l'URL du site dans la bio Instagram, la Page Facebook et le Google Business Profile.
