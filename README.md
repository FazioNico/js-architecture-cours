# Travaux Pratiques

**Step 01**
  1. Créer une architecture basic pour le developpement de ton application
```
myProject    
    ├── src
        ├── app
        │   ├── app.js
        │
        ├── index.html
```
  2. Créer le fichier `index.html` avec les balise html5.
  Ajouter balise script pour importer le fichier qui suit:
  3. Créer un fichier `app.js` avec une class `MyApp`.
  Afficher un `Hello World` dans une balise h1 dans le body de la page `index.html`, mais EN JAVASCRIPT (utiliser la class MyApp et creer une method start() pour effectuer l'affichage).

**Step 02** (fichier `app.js`)
  1. Créer une class `LoginPage` pour la page d'accueil de l'application.
  2. Créer une fonction `initUI`  dans la class `LoginPage` qui s'occupe de l'affichage du `Hello world!`
  3. instentier la class `LoginPage` depuis la function `start` de la class `MyApp`.


**Step 03** (class `LoginPage`)
  1. Créer un formulaire avec un input de type email, un autre de type password et un bouton login.
  2. ajouter un evenement sur le clic du bouton submit qui récupère les valeur de touts les champs dans une variable SANS changer de page.
  3. afficher les variables du formulaire dans la console

**Step 04** (fichier `app.js`)
  1. Créer une nouvelle class `DasboardPage` qui reçevera les informations envoyée par le formulaire de la class `LoginPage`
  2. Dans la class `DasboardPage`, retirer la section HTML de la page de connection du DOM (généré par `LoginPage`) et afficher les informations envoyée par le formulaire sous cette forme `Hello ${userName}!` dans une nouvelle section HTML.