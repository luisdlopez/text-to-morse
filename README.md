# text-to-morse
Takes a text input and creates a morse output

# Challenge Description
Pour ce défi technique, votre tâche est simple:

votre application lira un fichier texte ayant une phrase par ligne. Il n'y a aucune ligne vide.

##1ère partie: 

pour chaque phrase que vous lirez, vous devez la convertir en code Morse et l'afficher à l'écran. Affichez une nouvelle ligne par ligne du fichier.

Par exemple, si une des phrases est 

"Hello world"

vous devez afficher à l'écran: 

.... . .-.. .-.. --- / .-- --- .-. .-.. -..

Notez bien le slash ( / ) qui signifie un espace entre deux mots.

##2ème partie:
vous devez écrire un fichier mp3 ou wav qui doit correspondre au message transmis en code Morse.

Pour un exemple du résultat, utilisez ce site: http://morsecode.scphillips.com/translator.html. Vous pouvez faire jouer le résultat en Morse et ajuster la vitesse.
Il faut bien entendre chaque son pour que votre rendu soit accepté. Un message en Morse trop rapide au point où personne ne comprendra ce qui est dit sera refusé.

##Spécifications:
- utilisez cet alphabet: http://morsecode.scphillips.com/morse2.html. N'utilisez que les lettres (sans accents), les chiffres et les ponctuations.
- la cadence: 
    - Votre unité de base est le ( . )
    - Une barre ( - ), en terme de temps, équivaut à 3 points ( ... )
    - L'espace de temps entre deux lettres (donc un espace) est le même temps qu'une barre ( - ).
    - L'espace de temps entre deux mots est 5 points ( ..... )
    - Vous n'affichez pas (et ne faites pas jouer) les espaces entre les lettres et les mots.
- celui qui rendra son fichier audio le plus rapidement sera déclaré vainceur. VOUS DEVEZ DONC CHRONOMÉTRER L'EXÉCUTION COMPLÈTE DU PROCESSUS.
- si votre fichier audio comporte des erreurs dans le code Morse, vous êtes out.
- un fichier qui joue le code à une vitesse qui ne permet pas de bien distinguer les différents signaux est invalide.