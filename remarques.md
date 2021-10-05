# Erreurs courantes 2020

## HTML
* Ajouter valeur par défaut
* valeur des attribut en `kebacase` pas `camelcase` : `couleurFond -> couleur-fond`
* Valeur inutile pour les checkbox
* Utiliser les attributs `rows` et `cols` pour donner une taille initiale
* Pour les groupes de boutons radio et groupes de cases à cocher toujours utiliser un `<fieldset>` et une `<legend>`.
* Changer les valeurs par des valeurs CSS
* **Pas de majuscules** dans les valeurs des attributs HTML !
* Utiliser un nom différent pour les cases à cocher.

## JavaScript


* Si possible, récupérer, rechercher, qu'une seule fois les éléments
  HTML en les plaçant dans des **constantes**
  et ce **en dehors de la fonction `miseAjour()`**.
* Transformer les chaines en entier avec `parseInt()`
* Tester si la hauteur  et la largeur sont des nombres avec `isNaN(variable)`.
* Ajouter "px" a la valeur CSS de hauteur et largeur.
* Récupérer la valeur du groupe de boutons raidios avec
  `document.querySelector('[name="couleur"]:checked')`
* Utiliser la propriété `.checked` pour savoir si une case est cochée.
* Utiliser les ternaires pour les cases à cocher :
  https://divtec.gitbook.io/133a/javascript/introduction/conditions#loperateur-ternaire-conditionnel
* Récupérer tout le CSS d'un élément avec `style.cssText`.
* Écouter l'envoi du formulaire et non le clic du bouton.
  https://divtec.gitbook.io/133a/javascript/formulaires/capter-lenvoi-du-formulaire#evenement-submit
* Faire le querySelector sur le formulair
* Mettre en **camelcase** les constantes qui représentent des objets. 

