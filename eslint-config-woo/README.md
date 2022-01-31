# Woopear EsLint

> Avant de débuter, intaller le plugin `eslint` sur vscode

## Les installations

### Si le projet n'a pas initialisé ESLINT (not files eslintrc.js)

> si vous n'avez pas de fichier `eslintrc.js` ou `eslintrc.cjs`

- Installation des packages :

```shell
$ npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier tslint typescript eslint-plugin-css-modules eslint-plugin-html eslint-config-woopear
```

- initialisé eslint

```shell
$ ./node_modules/.bin/eslint --init
```

> puis entrez les informations demandées par le CLI  
> ATTENTION vous devrez choisir un framework et aucune préconfiguration eslint divers  
> Après avoir terminé la configuration, le fichier `eslintrc` sera créé

- Ajouter ou remplacer le code du fichier `eslintrc`

> copier coller le code ci-dessous dans votre fichier

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['woopear', 'plugin:css-modules/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 12 },
  plugins: ['@typescript-eslint', 'html', 'css-modules'],
};
```

> redémarré vscode pour s'assurer que tout fonctionne

### Si ESLINT est déja initialisé

> Vous possèdez déja une fichier `eslintrc`  
> qui à été creer au moment de l'installation de votre framework  
> ici nous allons exposer l'installation NestJS.
> dans les faits le principe reste le meme dans tout les frameworks

**L'installation avec svelte/sveltekit cliquer sur le lien ci-dessous**  
[installation eslint-woopear sur svelte/sveltekit](https://github.com/woopear/install_basic_eslintwoopear_sveltekit)

#### Installation NestJS

- installation du package eslint-woopear

```shell
$ npm i eslint-config-woopear
```

- modification du fichier `eslintrc`

> proprieté : `parserOptions`

```js
parserOptions: {
  project: 'tsconfig.json',
  tsconfigRootDir: __dirname,
  sourceType: 'module',
},
```

> proprieté : `extends`

```js
extends: [
  'woopear',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
],
```

#### Paramettrer vscode

> Pour que l'extension prettier fonctionne avec notre linter,  
> veuillez copier-coller ses lignes dans le fichier settings.json de votre vscode.  
> (pour le trouver tapez : ctrl + p (window))  
> et choisissez le paramètre de format : json  
> collez ces lignes à la fin du fichier

```json
"[javascript]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

## Définition des régles

#

### Régles basique

#

| Régles                      | Définition                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| for-direction               | appliquer la clause de mise à jour de la boucle "for" en déplaçant le compteur dans la bonne direction |
| getter-return               | appliquer les instructions « return » dans les getters                                                 |
| no-cond-assign              | interdire les opérateurs d'affectation dans les expressions conditionnelles                            |
| no-console (`pas utilisé`)  | interdit les consoles à utiliser pour la prod                                                          |
| no-dupe-args                | interdire les arguments en double dans les définitions de « fonction »                                 |
| no-dupe-else-if             | interdire les conditions en double dans les chaînes if-else-if                                         |
| no-dupe-keys                | interdire les clés en double dans les littéraux d'objet                                                |
| no-empty                    | interdire les instructions de bloc vides                                                               |
| no-extra-parens             | interdire les parenthèses inutiles                                                                     |
| no-func-assign              | interdire la réaffectation des déclarations de « fonction »                                            |
| no-inner-declarations       | interdire les déclarations de variables ou de "fonctions" dans les blocs imbriqués                     |
| no-obj-calls                | interdire l'appel des propriétés d'objet globales en tant que fonctions                                |
| no-setter-return            | interdire le retour de valeurs par les setters                                                         |
| no-sparse-arrays            | interdire les tableaux clairsemés                                                                      |
| no-template-curly-in-string | interdire la syntaxe d'espace réservé de littéral de modèle dans les chaînes normales                  |
| no-unreachable              | interdire le code inaccessible après les instructions `return`, `throw`, `continue` et `break`         |
| no-unsafe-negation          | interdire la négation de l'opérande gauche des opérateurs relationnels                                 |

#

### Régles de bonne pratique

#

| Régles                       | Définition                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| accessor-pairs               | appliquer des paires getter et setter dans les objets et les classes                                                            |
| array-callback-return        | appliquer les instructions « return » dans les rappels de méthodes de tableau                                                   |
| class-methods-use-this       | imposer que les méthodes de classe utilisent `this`                                                                             |
| curly                        | appliquer un style d'accolade cohérent pour toutes les instructions de contrôle                                                 |
| default-case                 | exiger des cas `default` dans les instructions `switch`                                                                         |
| default-case-last            | appliquer les clauses par défaut dans les instructions switch en dernier                                                        |
| default-param-last           | appliquer les paramètres par défaut en dernier (pour les fonctions)                                                             |
| eqeqeq                       | nécessitent l'utilisation de `===` et `!==`                                                                                     |
| max-classes-per-file         | imposer un nombre maximum de classes par fichier                                                                                |
| no-alert (`pas utilisé`)     | interdire l'utilisation de « alerte », « confirmation » et « invite » (decommenter pour prod)                                   |
| no-constructor-return        | interdire l'utilisation de `arguments.caller` ou `arguments.calle`                                                              |
| no-empty-function            | interdire les fonctions vides                                                                                                   |
| no-fallthrough               | interdire la chute des instructions `case`                                                                                      |
| no-multi-spaces              | interdire plusieurs espaces                                                                                                     |
| no-new                       | interdire les "nouveaux" opérateurs en dehors des affectations ou des comparaisons                                              |
| no-redeclare                 | interdire la redéclaration de variable                                                                                          |
| no-return-await              | interdire les "retours en attente" inutiles                                                                                     |
| no-script-url                | interdire les URL `javascript:`                                                                                                 |
| no-self-assign               | interdire les affectations où les deux côtés sont exactement les mêmes                                                          |
| no-self-compare              | interdire les comparaisons où les deux côtés sont exactement les mêmes                                                          |
| no-throw-literal             | interdire de lancer des littéraux comme exceptions                                                                              |
| no-unmodified-loop-condition | interdire les conditions de boucle non modifiées                                                                                |
| require-await                | interdire les fonctions asynchrones qui n'ont pas d'expression « await »                                                        |
| yoda                         | exiger ou interdire les conditions "Yoda" (dans les conditions, la variable en premier enuite en deuxieme l'element à comparer) |

#

### régles pour les variables

#

| Régles               | Définition                                                             |
| -------------------- | ---------------------------------------------------------------------- |
| no-delete-var        | interdire la suppression de variables                                  |
| no-label-var         | interdire le meme nom d'une variable et d'une étiquette                |
| no-unused-vars       | interdire les variables inutilisées                                    |
| no-use-before-define | interdire l'utilisation de variables avant qu'elles ne soient définies |

#

### Régles pour le style

#

| Régles                                | Définition                                                                                                              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| class-name (`pas utilisé`)            | exige une majuscule a la première lettre d'une classe                                                                   |
| array-bracket-newline                 | appliquer les sauts de ligne après l'ouverture et avant la fermeture des crochets du tableau                            |
| array-bracket-spacing (`pas utilisé`) | appliquer un espacement cohérent à l'intérieur des crochets du tableau                                                  |
| array-element-newline                 | appliquer des sauts de ligne après chaque élément du tableau                                                            |
| block-spacing                         | interdire ou appliquer les espaces à l'intérieur des blocs après l'ouverture du bloc et avant la fermeture du bloc      |
| brace-style                           | appliquer un style d'accolade cohérent pour les blocs                                                                   |
| camelcase                             | appliquer la convention de nommage camelcase                                                                            |
| capitalized-comments                  | appliquer ou interdire la mise en majuscule de la première lettre d'un commentaire                                      |
| comma-dangle                          | exiger ou interdire les virgules de fin                                                                                 |
| comma-spacing                         | appliquer un espacement cohérent avant et après les virgules                                                            |
| computed-property-spacing             | appliquer un espacement cohérent à l'intérieur des parenthèses de propriétés calculées                                  |
| eol-last                              | exiger ou interdire la nouvelle ligne à la fin des fichiers                                                             |
| func-call-spacing                     | exiger ou interdire l'espacement entre les identifiants de fonction et leurs invocations                                |
| func-name-matching                    | exiger que les noms de fonctions correspondent au nom de la variable ou de la propriété à laquelle elles sont affectées |
| func-names                            | exiger ou interdire les expressions `fonction` nommées                                                                  |
| func-style                            | imposer l'utilisation cohérente des déclarations ou des expressions de « fonction »                                     |
| function-call-argument-newline        | appliquer des sauts de ligne entre les arguments d'un appel de fonction                                                 |
| function-paren-newline                | appliquer des sauts de ligne cohérents à l'intérieur des parenthèses de fonction                                        |
| implicit-arrow-linebreak              | appliquer l'emplacement des corps de fonction de flèche                                                                 |
| indent                                | appliquer une indentation cohérente                                                                                     |
| jsx-quotes                            | appliquer l'utilisation cohérente des guillemets doubles ou simples dans les attributs JSX                              |
| key-spacing                           | appliquer un espacement cohérent entre les clés et les valeurs dans les propriétés littérales d'objet                   |
| keyword-spacing                       | appliquer un espacement cohérent avant et après les mots-clés                                                           |
| line-comment-position (`pas utilisé`) | appliquer la position des commentaires de ligne                                                                         |
| lines-around-comment                  | nécessitent des lignes vides autour des commentaires                                                                    |
| lines-between-class-members           | exiger ou interdire une ligne vide entre les membres du groupe                                                          |
| max-len                               | imposer une longueur de ligne maximale                                                                                  |
| multiline-comment-style               | appliquer un style particulier pour les commentaires multilignes                                                        |
| new-cap                               | exiger que les noms des constructeurs commencent par une majuscule                                                      |
| new-parens                            | appliquer ou interdire les parenthèses lors de l'appel d'un constructeur sans arguments                                 |
| newline-per-chained-call              | nécessite un saut de ligne après chaque appel dans une chaîne de méthode                                                |
| no-lonely-if                          | interdire les instructions 'if' comme seule instruction dans les blocs 'else'                                           |
| no-mixed-spaces-and-tabs              | interdire les espaces mixtes et les tabulations pour l'indentation                                                      |
| no-multi-assign                       | interdire l'utilisation d'expressions d'affectation chaînées                                                            |
| no-multiple-empty-lines               | interdire plusieurs lignes vides                                                                                        |
| no-negated-condition                  | interdire les conditions négatives                                                                                      |
| no-nested-ternary                     | interdire les expressions ternaires imbriquées                                                                          |
| no-new-object                         | interdire les constructeurs « Object »                                                                                  |
| no-unneeded-ternary                   | interdire les opérateurs ternaires lorsque des alternatives plus simples existent                                       |
| no-whitespace-before-property         | interdire les espaces avant les propriétés                                                                              |
| object-curly-newline                  | appliquer des sauts de ligne cohérents après l'ouverture et avant la fermeture des accolades                            |
| object-curly-spacing                  | appliquer un espacement cohérent à l'intérieur des accolades                                                            |
| operator-assignment                   | exiger ou interdire la sténographie de l'opérateur d'affectation dans la mesure du possible                             |
| operator-linebreak                    | appliquer un style de saut de ligne cohérent pour les opérateurs                                                        |
| padded-blocks                         | exiger ou interdire le remplissage dans les blocs                                                                       |
| padding-line-between-statements       | exiger ou interdire les lignes de remplissage entre les instructions                                                    |
| quote-props                           | exiger des guillemets autour des noms de propriété littéraux d'objet                                                    |
| quotes                                | appliquer l'utilisation cohérente des backticks, des guillemets doubles ou simples                                      |
| semi                                  | exiger ou interdire les points-virgules au lieu de l'ASI                                                                |
| semi-spacing                          | appliquer un espacement cohérent avant et après les points-virgules                                                     |
| semi-style                            | appliquer l'emplacement des points-virgules                                                                             |
| space-before-blocks                   | appliquer un espacement cohérent avant les blocs                                                                        |
| space-before-function-paren           | appliquer un espacement cohérent avant la parenthèse ouvrante de la définition de la "fonction"                         |
| space-infix-ops                       | nécessitent un espacement autour des opérateurs infixes                                                                 |
| pace-unary-ops                        | appliquer un espacement cohérent avant ou après les opérateurs unaires                                                  |
| spaced-comment                        | appliquer un espacement cohérent après le `//` ou `/*` dans un commentaire                                              |
| switch-colon-spacing                  | appliquer l'espacement autour des deux points des instructions switch                                                   |
| template-tag-spacing                  | exiger ou interdire l'espacement entre les balises de modèle et leurs littéraux                                         |

#

### Régles ecmascript 6

#

| Régles                                 | Définition                                                                                                       |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| arrow-body-style                       | nécessitent des accolades autour des corps de fonction de flèche                                                 |
| arrow-parens                           | exiger des parenthèses autour des arguments de la fonction flèche                                                |
| arrow-spacing                          | appliquer un espacement cohérent avant et après la flèche dans les fonctions de flèche                           |
| no-class-assign                        | interdire la réaffectation des membres du groupe                                                                 |
| no-const-assign                        | interdire la réaffectation des variables `const`                                                                 |
| no-dupe-class-members                  | interdire les membres de classe en double                                                                        |
| no-duplicate-imports                   | interdire les importations de modules en double                                                                  |
| no-useless-constructor (`pas utilisé`) | interdire les constructeurs inutiles                                                                             |
| no-useless-rename (`pas utilisé`)      | interdire de renommer les affectations d'importation, d'exportation et déstructurées avec le même nom            |
| no-var                                 | nécessite `let` ou `const` au lieu de `var`                                                                      |
| prefer-const                           | nécessitent des déclarations `const` pour les variables qui ne sont jamais réaffectées après avoir été déclarées |
