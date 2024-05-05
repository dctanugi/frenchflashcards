const words = ["abord",
"acheter",
"action",
"adresser",
"affaire",
"afin",
"agir",
"ah",
"ailleurs",
"aimer",
"ainsi",
"air",
"ajouter",
"aller",
"alors",
"amener",
"ami",
"amour",
"amuser",
"an",
"ancien",
"animal",
"annoncer",
"année",
"apercevoir",
"appeler",
"apporter",
"apprendre",
"approcher",
"après",
"arbre",
"argent",
"arriver",
"arrêter",
"asseoir",
"assez",
"assurer",
"attendre",
"au",
"aucun",
"aujourd’hui",
"aussi",
"aussitôt",
"autant",
"autour",
"autre",
"aux",
"avancer",
"avant",
"avec",
"avoir",
"bas",
"battre",
"beau",
"beaucoup",
"besoin",
"bien",
"bientôt",
"blanc",
"bleu",
"boire",
"bois",
"bon",
"bonheur",
"bord",
"bout",
"bras",
"bruit",
"bête",
"cacher",
"campagne",
"car",
"cas",
"cause",
"ce",
"cela",
"celle",
"celui",
"cent",
"cependant",
"certain",
"cet",
"cette",
"chacun",
"chambre",
"champ",
"changer",
"chanter",
"chaque",
"charger",
"chat",
"chaud",
"chemin",
"cher",
"chercher",
"cheval",
"chez",
"chien",
"chose",
"ciel",
"cinq",
"classe",
"coin",
"combien",
"comme",
"commencer",
"comment",
"comprendre",
"compter",
"connaître",
"content",
"continuer",
"contre",
"corps",
"coucher",
"couleur",
"coup",
"cour",
"courir",
"cours",
"couvrir",
"crier",
"croire",
"côté",
"cœur",
"dame",
"dans",
"de",
"demain",
"demander",
"demi",
"depuis",
"dernier",
"derrière",
"des",
"descendre",
"deux",
"devant",
"devenir",
"devoir",
"dieu",
"dimanche",
"dire",
"diriger",
"dix",
"donc",
"donner",
"dont",
"dormir",
"doute",
"doux",
"droit",
"du",
"dès",
"décider",
"déjà",
"dîner",
"eau",
"effet",
"elle",
"elles",
"embrasser",
"emporter",
"empêcher",
"en",
"encore",
"enfant",
"enfin",
"ensemble",
"ensuite",
"entendre",
"entier",
"entre",
"entrer",
"envoyer",
"esprit",
"espérer",
"et",
"eux",
"exemple",
"faim",
"faire",
"fait",
"falloir",
"famille",
"faux",
"femme",
"fenêtre",
"fer",
"fermer",
"feu",
"feuille",
"figure",
"fille",
"fils",
"fin",
"finir",
"fleur",
"fois",
"fond",
"force",
"former",
"fort",
"forêt",
"foule",
"frais",
"franc",
"français",
"frapper",
"froid",
"frère",
"fête",
"gagner",
"garder",
"garçon",
"gauche",
"gens",
"goût",
"grand",
"gros",
"grâce",
"guerre",
"général",
"haut",
"heure",
"heureux",
"hier",
"histoire",
"hiver",
"homme",
"honneur",
"huit",
"ici",
"idée",
"il",
"ils",
"instant",
"intérêt",
"jamais",
"jardin",
"je",
"jeter",
"jeu",
"jeune",
"joie",
"joli",
"jouer",
"jour",
"joyeux",
"jusque",
"la",
"laisser",
"le",
"lendemain",
"lequel",
"les",
"lettre",
"leur",
"lever",
"leçon",
"lieu",
"lire",
"lit",
"livre",
"loi",
"loin",
"long",
"longtemps",
"lorsque",
"lui",
"là",
"ma",
"madame",
"mademoiselle",
"main",
"maintenant",
"mais",
"maison",
"mal",
"malade",
"malgré",
"malheureux",
"maman",
"manger",
"manière",
"manquer",
"marcher",
"matin",
"mauvais",
"me",
"meilleur",
"mer",
"mes",
"mettre",
"mieux",
"milieu",
"mille",
"minute",
"moi",
"moins",
"mois",
"moment",
"mon",
"monde",
"monsieur",
"monter",
"montrer",
"mort",
"mot",
"mourir",
"mouvement",
"moyen",
"mère",
"mètre",
"même",
"nature",
"ne",
"neuf",
"ni",
"nid",
"noir",
"nom",
"nombreux",
"non",
"nos",
"notre",
"nous",
"nouveau",
"nouvelle",
"nuit",
"nécessaire",
"objet",
"obliger",
"occasion",
"occuper",
"offrir",
"oiseau",
"on",
"oncle",
"or",
"ordre",
"oser",
"ou",
"oublier",
"oui",
"ouvrier",
"ouvrir",
"où",
"pain",
"papa",
"par",
"paraître",
"parce que",
"parent",
"parfois",
"parler",
"parmi",
"parole",
"part",
"partie",
"partir",
"pas",
"passer",
"pauvre",
"payer",
"pays",
"peine",
"pendant",
"penser",
"pensée",
"perdre",
"permettre",
"personne",
"petit",
"peu",
"peur",
"peut-être",
"pied",
"pièce",
"plaisir",
"plein",
"pleurer",
"pluie",
"plus",
"plusieurs",
"plutôt",
"point",
"porter",
"poser",
"possible",
"pour",
"pourquoi",
"pourtant",
"pousser",
"pouvoir",
"prairie",
"premier",
"prendre",
"presque",
"prier",
"printemps",
"prix",
"produire",
"profond",
"promenade",
"promener",
"promettre",
"propre",
"près",
"préparer",
"présent",
"présenter",
"prêt",
"puis",
"puisque",
"père",
"quand",
"quart",
"quatre",
"que",
"quel",
"quelque",
"question",
"qui",
"quitter",
"quoi",
"raconter",
"raison",
"rappeler",
"recevoir",
"reconnaître",
"regarder",
"remercier",
"remettre",
"remplir",
"rencontrer",
"rendre",
"rentrer",
"reprendre",
"rester",
"retour",
"retourner",
"retrouver",
"revenir",
"revoir",
"rien",
"rire",
"roi",
"rose",
"rouge",
"route",
"rue",
"répondre",
"sa",
"salle",
"sans",
"sauver",
"savoir",
"se",
"semaine",
"sembler",
"sens",
"sentiment",
"sentir",
"sept",
"service",
"servir",
"ses",
"seul",
"seulement",
"si",
"silence",
"simple",
"six",
"soi",
"soin",
"soir",
"soldat",
"soleil",
"son",
"songer",
"sonner",
"sorte",
"sortir",
"souffrir",
"sourire",
"sous",
"souvenir",
"souvent",
"suite",
"suivre",
"sujet",
"sur",
"surtout",
"sœur",
"ta",
"table",
"tandis que",
"tant",
"tante",
"tard",
"te",
"tel",
"temps",
"tendre",
"tenir",
"terminer",
"terre",
"tes",
"tirer",
"toi",
"tomber",
"ton",
"toucher",
"toujours",
"tour",
"tourner",
"tout",
"train",
"travail",
"travailler",
"traverser",
"triste",
"trois",
"trop",
"trouver",
"très",
"tu",
"tête",
"un",
"une",
"vacances",
"valoir",
"venir",
"vent",
"vers",
"vert",
"vie",
"vieux",
"village",
"ville",
"vingt",
"visage",
"vite",
"vivre",
"voici",
"voilà",
"voir",
"voisin",
"voiture",
"voix",
"vos",
"vote",
"vouloir",
"vous",
"voyage",
"vrai",
"vue",
"y",
"yeux",
"zéro",
"à",
"âge",
"ça",
"école",
"écouter",
"écrire",
"élève",
"état",
"être",
"oeil",
"œuvre"];

const word = document.getElementById('word');
const refreshButton = document.getElementById('refresh');

function updateWord() {
    const wordIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[wordIndex];
    word.textContent = randomWord;
}

// Initialize the first random word
window.onload = updateWord;

refreshButton.addEventListener('click', updateWord);