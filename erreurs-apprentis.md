Éviter de rechercher des éléments HTML avec `getElementById` à chaque appel
de la fonction `miseAJour`. 
Rechercher les éléments du formulaire 1x au démarrage du programme,
puis uniquement récupérer leur nouvelle valeur dans `miseAJour`.

---
Transformer en entier directement à la récupération.

---
Ne pas retrouner une alert !

Afficher `alert` et ensuite `return`.

```javascript
// PAS BIEN
return alert('Entrez un nombre !');

// BIEN
alert('Entrez un nombre !');
return;
```

