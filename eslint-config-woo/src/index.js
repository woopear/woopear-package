'use strict';

module.exports = {
  rules: {
    /**
     * rules basic
     */
    'for-direction': 2, // appliquer la clause de mise à jour de la boucle "for" en déplaçant le compteur dans la bonne direction
    'getter-return': 2, // appliquer les instructions « return » dans les getters
    'no-cond-assign': 2, // interdire les opérateurs d'affectation dans les expressions conditionnelles
    //'no-console': 2, // interdit les consoles à utiliser pour la prod
    'no-dupe-args': 2, // interdire les arguments en double dans les définitions de « fonction »
    'no-dupe-else-if': 2, // interdire les conditions en double dans les chaînes if-else-if
    'no-dupe-keys': 2, // interdire les clés en double dans les littéraux d'objet
    'no-empty': 2, // interdire les instructions de bloc vides
    'no-extra-parens': 0, // interdire les parenthèses inutiles
    'no-func-assign': 2, // interdire la réaffectation des déclarations de « fonction »
    'no-inner-declarations': 2, // interdire les déclarations de variables ou de "fonctions" dans les blocs imbriqués
    'no-obj-calls': 2, // interdire l'appel des propriétés d'objet globales en tant que fonctions
    'no-setter-return': 2, // interdire le retour de valeurs par les setters
    'no-sparse-arrays': 2, // interdire les tableaux clairsemés
    'no-template-curly-in-string': 2, // interdire la syntaxe d'espace réservé de littéral de modèle dans les chaînes normales
    'no-unreachable': 2, // interdire le code inaccessible après les instructions `return`, `throw`, `continue` et `break`
    'no-unsafe-negation': 'error', // interdire la négation de l'opérande gauche des opérateurs relationnels

    /**
     * rules best practrice
     */
    'accessor-pairs': 2, // appliquer des paires getter et setter dans les objets et les classes
    'array-callback-return': 2, // appliquer les instructions « return » dans les rappels de méthodes de tableau
    //'class-methods-use-this': 2, // imposer que les méthodes de classe utilisent `this`
    curly: 2, // appliquer un style d'accolade cohérent pour toutes les instructions de contrôle
    'default-case': 2, // exiger des cas `default` dans les instructions `switch`
    'default-case-last': 2, // appliquer les clauses par défaut dans les instructions switch en dernier
    'default-param-last': ['error'], // appliquer les paramètres par défaut en dernier (pour les fonctions)
    eqeqeq: [2, 'always'], // nécessitent l'utilisation de `===` et `!==`
    'max-classes-per-file': ['error', 1], // imposer un nombre maximum de classes par fichier
    //'no-alert': 2, // interdire l'utilisation de « alerte », « confirmation » et « invite » (decommenter pour prod)
    'no-constructor-return': 2, // interdire l'utilisation de `arguments.caller` ou `arguments.calle`
    //'no-empty-function': 2, // interdire les fonctions vides
    'no-fallthrough': 2, // interdire la chute des instructions `case`
    'no-multi-spaces': 2, // interdire plusieurs espaces
    'no-new': 2, // interdire les "nouveaux" opérateurs en dehors des affectations ou des comparaisons
    'no-redeclare': 2, // interdire la redéclaration de variable
    'no-return-await': 2, // interdire les "retours en attente" inutiles
    'no-script-url': 2, // interdire les URL `javascript:`
    'no-self-assign': 2, // interdire les affectations où les deux côtés sont exactement les mêmes
    'no-self-compare': 2, // interdire les comparaisons où les deux côtés sont exactement les mêmes
    'no-throw-literal': 2, // interdire de lancer des littéraux comme exceptions
    'no-unmodified-loop-condition': 2, // interdire les conditions de boucle non modifiées
    'require-await': 2, // interdire les fonctions asynchrones qui n'ont pas d'expression « await »
    yoda: [2, 'always'], // exiger ou interdire les conditions "Yoda" (dans les conditions, la variable en premier enuite en deuxieme l'element à comparer)

    /**
     * variable
     */
    'no-delete-var': 2, // interdire la suppression de variables
    'no-label-var': 2, // interdire le meme nom d'une variable et d'une étiquette
    'no-unused-vars': 2, // interdire les variables inutilisées
    'no-use-before-define': 2, // interdire l'utilisation de variables avant qu'elles ne soient définies

    /**
     * style code
     */
    //'class-name': [2, 'always'],
    'array-bracket-newline': [2, { multiline: true }], // appliquer les sauts de ligne après l'ouverture et avant la fermeture des crochets du tableau
    //'array-bracket-spacing': [2, , 'never'], // appliquer un espacement cohérent à l'intérieur des crochets du tableau
    'array-element-newline': [0], // appliquer des sauts de ligne après chaque élément du tableau
    'block-spacing': 2, // interdire ou appliquer les espaces à l'intérieur des blocs après l'ouverture du bloc et avant la fermeture du bloc
    'brace-style': 2, // appliquer un style d'accolade cohérent pour les blocs
    camelcase: 2, // appliquer la convention de nommage camelcase
    'capitalized-comments': [2, 'never'], // appliquer ou interdire la mise en majuscule de la première lettre d'un commentaire
    'comma-dangle': [0], // exiger ou interdire les virgules de fin
    'comma-spacing': [2, { before: false, after: true }], // appliquer un espacement cohérent avant et après les virgules
    'computed-property-spacing': [2, 'never'], // appliquer un espacement cohérent à l'intérieur des parenthèses de propriétés calculées
    'eol-last': [2, 'always'], // exiger ou interdire la nouvelle ligne à la fin des fichiers
    'func-call-spacing': [2, 'never'], // exiger ou interdire l'espacement entre les identifiants de fonction et leurs invocations
    'func-name-matching': [2, 'never'], // exiger que les noms de fonctions correspondent au nom de la variable ou de la propriété à laquelle elles sont affectées
    'func-names': [2, 'never'], // exiger ou interdire les expressions `fonction` nommées
    'func-style': [2, 'declaration'], // imposer l'utilisation cohérente des déclarations ou des expressions de « fonction »
    'function-call-argument-newline': [0], // appliquer des sauts de ligne entre les arguments d'un appel de fonction
    'function-paren-newline': [0], // appliquer des sauts de ligne cohérents à l'intérieur des parenthèses de fonction
    'implicit-arrow-linebreak': [2, 'beside'], // appliquer l'emplacement des corps de fonction de flèche
    indent: [0], // appliquer une indentation cohérente
    'jsx-quotes': [2, 'prefer-single'], // appliquer l'utilisation cohérente des guillemets doubles ou simples dans les attributs JSX
    'key-spacing': [2, { beforeColon: false }], // appliquer un espacement cohérent entre les clés et les valeurs dans les propriétés littérales d'objet
    'keyword-spacing': [2, { before: true }], // appliquer un espacement cohérent avant et après les mots-clés
    //'line-comment-position': [2, { position: 'beside' }], // appliquer la position des commentaires de ligne
    'lines-around-comment': [0], // nécessitent des lignes vides autour des commentaires
    'lines-between-class-members': [2, 'always'], // exiger ou interdire une ligne vide entre les membres du groupe
    'max-len': [0], // imposer une longueur de ligne maximale
    'multiline-comment-style': [2, 'starred-block'], // appliquer un style particulier pour les commentaires multilignes
    //'new-cap': [2, { newIsCap: true }], // exiger que les noms des constructeurs commencent par une majuscule
    'new-parens': [0], // appliquer ou interdire les parenthèses lors de l'appel d'un constructeur sans arguments
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }], // nécessite un saut de ligne après chaque appel dans une chaîne de méthode
    'no-lonely-if': 2, // interdire les instructions 'if' comme seule instruction dans les blocs 'else'
    'no-mixed-spaces-and-tabs': 2, // interdire les espaces mixtes et les tabulations pour l'indentation
    'no-multi-assign': 2, // interdire l'utilisation d'expressions d'affectation chaînées
    'no-multiple-empty-lines': 2, // interdire plusieurs lignes vides
    'no-negated-condition': 0, // interdire les conditions négatives
    'no-nested-ternary': 2, // interdire les expressions ternaires imbriquées
    'no-new-object': 2, // interdire les constructeurs « Object »
    'no-unneeded-ternary': 2, // interdire les opérateurs ternaires lorsque des alternatives plus simples existent
    'no-whitespace-before-property': 2, // interdire les espaces avant les propriétés
    'object-curly-newline': [0], // appliquer des sauts de ligne cohérents après l'ouverture et avant la fermeture des accolades
    'object-curly-spacing': [2, 'always'], // appliquer un espacement cohérent à l'intérieur des accolades
    'operator-assignment': [2, 'always'], // exiger ou interdire la sténographie de l'opérateur d'affectation dans la mesure du possible
    'operator-linebreak': [0], // appliquer un style de saut de ligne cohérent pour les opérateurs
    'padded-blocks': [2, 'never'], // exiger ou interdire le remplissage dans les blocs
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ], // exiger ou interdire les lignes de remplissage entre les instructions
    'quote-props': [2, 'as-needed'], // exiger des guillemets autour des noms de propriété littéraux d'objet
    quotes: [2, 'single'], // appliquer l'utilisation cohérente des backticks, des guillemets doubles ou simples
    semi: [2, 'always'], // exiger ou interdire les points-virgules au lieu de l'ASI
    'semi-spacing': 2, // appliquer un espacement cohérent avant et après les points-virgules
    'semi-style': [2, 'last'], // appliquer l'emplacement des points-virgules
    'space-before-blocks': 2, // appliquer un espacement cohérent avant les blocs
    'space-before-function-paren': [0], // appliquer un espacement cohérent avant la parenthèse ouvrante de la définition de la "fonction"
    'space-infix-ops': 2, // nécessitent un espacement autour des opérateurs infixes
    'space-unary-ops': 2, // appliquer un espacement cohérent avant ou après les opérateurs unaires
    'spaced-comment': [2, 'always'], // appliquer un espacement cohérent après le `//` ou `/*` dans un commentaire
    'switch-colon-spacing': 2, // appliquer l'espacement autour des deux points des instructions switch
    'template-tag-spacing': [2, 'always'], // exiger ou interdire l'espacement entre les balises de modèle et leurs littéraux

    /**
     * ecmascript 6
     */
    'arrow-body-style': [2, 'always'], // nécessitent des accolades autour des corps de fonction de flèche
    'arrow-parens': [2, 'always'], // exiger des parenthèses autour des arguments de la fonction flèche
    'arrow-spacing': 2, // appliquer un espacement cohérent avant et après la flèche dans les fonctions de flèche
    'no-class-assign': 2, // interdire la réaffectation des membres du groupe
    'no-const-assign': 2, // interdire la réaffectation des variables `const`
    'no-dupe-class-members': 2, // interdire les membres de classe en double
    'no-duplicate-imports': 2, // interdire les importations de modules en double
    //'no-useless-constructor': 2, // interdire les constructeurs inutiles
    //'no-useless-rename': 2, // interdire de renommer les affectations d'importation, d'exportation et déstructurées avec le même nom
    'no-var': 2, // nécessite `let` ou `const` au lieu de `var`
    'prefer-const': 2, // nécessitent des déclarations `const` pour les variables qui ne sont jamais réaffectées après avoir été déclarées
  },
};
