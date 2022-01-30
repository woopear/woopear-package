# Format

> package qui fournis des fonctions afin de formater des données d'une façon spécifique  
> ce package est en constante évolution, en fonction des besoins des projets.  
> certaine fonction on été mise à jour pour utiliser typescript

## string service

- exemple d'utilisation de la fonction : `firstToUppperCase`

```js
import { firstToUppperCase } from 'format-sveltekit';

let texteExemple = 'jean';

texteExemple = firstToUppperCase(texteExemple);

console.log(texteExemple);

// output :
// Jean
```

### Liste des fonctions

- firstToUppperCase : **met en majuscule la premiere lettre d'un mot**

```js
// word => mot que vous voulez mettre la premiere lettre en majuscule

firstToUppperCase(word: string): string

// output
// retourne le mot avec une majuscule à la premiere lettre
```

- textFormatingSample : **formate un long text, espace apres un . ou , ou majuscule apres un .**

```js
// text => long texte à formaté

textFormatingSample(text: string): string

// output
// retourne le text long formaté
```

- separateWithADateOfHours : **fonction qui spépare la date et l'heure avec un texte passé en argument**

```js
// date => date au format string '01/01/01 12:00:00'
// textSeparate => le texte que vous voulez mettre pour séparer la date de l'heure

separateDateOfHours(date: string, textSeparate: string): string

// output
// retourne la date formatée
```

## from service

- exemple d'utilisation de la fonction : `createObjectAsFormData`

```ts
import { createObjectAsFormData } from 'format-sveltekit';

// creation formData
const formData = createObjectAsFormData(e.target);

// output
// retourne un object clé : valeur venant du form passé en argument
```

### Liste des fonctions

- createObjectAsFormData :
  **creation d'un objet avec les données d'un formData venant directement d'un formulaire**  
  **retourne un objet pret pour l'envoie http**

```ts
createObjectAsFormData = <T>(target: HTMLFormElement): T

// output
// retourne un object clé : valeur venant du form passé en argument
```
