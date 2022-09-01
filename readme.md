#  Simple Crud

## Documentation

### Utilisation
- Lancer [json serveur](https://www.npmjs.com/package/json-server)
- Ouvrir index.html dans le navigateur
- Faire appel aux differentes fonctions dans la console

### Les fonctions

#### La recuperation de posts
`getAll()` pour recuperer tout les posts

`get(id)` pour recuperer un post avec son id

---

#### La suppression de posts
`del(id)` pour suprimer un posts grace a sont id

---

#### l'ajout de posts
`post(id, title, author)` pour ajouter un posts

---

#### La mise a jour de posts

`patchTitle(id, title)` pour modifier une seule valeur d'un posts (ici le title)

`put(id, title, author)` pour modifier plusieurs valeur d'un posts (ici le title, et l'author)

