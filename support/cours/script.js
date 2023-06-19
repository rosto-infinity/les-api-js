//XMLHttpRequest 

function reqListener() {
    // console.log(this.responseText);
}


let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();
//----------------
//  FECTH
//----------------
// fetch("mon lien", "objet d'options")
// .then((response) => {
//     //console.log(response)
// })
// .catch((error)=>console.log(error));



fetch("https://api.blablagues.net/?rub=blagues")
.then((response) => {
    // console.log(response)
})
// .catch((error)=>console.log(error));

fetch("data.txt")
    .then((res) => {
        // console.log(res);
    })
//-----------pour les code de res  https://developer.mozilla.org/fr/docs/Web/HTTP/Status

//    Codes de réponse HTTP
// Les codes de statut de réponse HTTP indiquent si une requête HTTP a été exécutée avec succès ou non. Les réponses sont regroupées en cinq classes :

// Les réponses informatives (100 - 199),
// Les réponses de succès (200 - 299),
// Les messages de redirection (300 - 399),
// Les erreurs du client (400 - 499),
// Les erreurs du serveur (500 - 599).

// fetch("data.text").then((res) => res.text());
    // .then((data) => console.log(data));



// fetch("data.json").then((res) => res.text());
    // .then((data) => console.log(data));

    const myHeaders = new Headers();
    const init = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default", 
    }
    // fetch("http://facebook.com", init).then((res) => console.log(res));
    
    // Ce script est une requête HTTP GET, qui utilise l'API Fetch de JavaScript pour récupérer les données du site web Facebook.com. Voici une explication détaillée de chaque ligne de code :



// La première ligne crée un nouvel objet Headers, qui sera utilisé pour ajouter des en-têtes HTTP à la requête.

// La deuxième ligne crée un objet d'initialisation, qui contient les options de la requête. Dans ce cas, la méthode HTTP utilisée est GET, ce qui signifie que nous envoyons une requête pour récupérer des données. Les headers sont définis sur l'objet Headers créé précédemment. Le mode est défini sur "cors", ce qui signifie que nous pouvons effectuer une requête cross-origin. Enfin, le cache est défini sur "default" pour utiliser le cache du navigateur si possible.

// La troisième ligne effectue la requête en utilisant l'API Fetch. Nous passons l'URL de Facebook.com et les options d'initialisation que nous avons créées.

// Ensuite, nous utilisons la méthode then() pour gérer la réponse de la requête. La réponse est retournée sous forme d'objet Response, que nous passons à la fonction de rappel anonyme. Dans ce cas, nous imprimons simplement l'objet Response dans la console.


// En résumé, ce script effectue une requête GET sur le site web Facebook.com et affiche la réponse dans la console. Il utilise l'API Fetch de JavaScript pour faciliter la requête HTTP et utiliser les options de la requête pour définir les en-têtes, le mode et le cache.

// Échec du chargement de la ressource : le serveur a répondu avec un statut de 404 (introuvable)
// 127.0.0.1/:1 L'accès pour récupérer sur 'https://facebook.com/' (redirigé depuis 'http://facebook.com/') depuis l'origine 'http://127.0.0.1:5501' a été bloqué par la politique CORS : aucun en-tête "Access-Control-Allow-Origin" n'est présent sur la ressource demandée. Si une réponse opaque répond à vos besoins, définissez le mode de la requête sur "no-cors" pour récupérer la ressource avec CORS désactivé.
// facebook.com/:1 Échec du chargement de la ressource : net::ERR_FAILED
// script.js:59 Non intercepté (en promesse) TypeError : Échec de la récupération
//     à script.js:59:5



        //status 404
    //  fetch("data.text", init).then((res) => console.log(res));
        
     //status 200
//   fetch("data.json", init).then((res) => console.log(res));



// Type de methode------------------------------------

// CRUD => Create (POST), read (GET), Update (PUT), Delete (DELETE)

// instalation de nodeJs
//**  npm -v
// **cd cours
// **npm init -y  


// Le script commence par deux commandes : "npm -v" pour vérifier que node package manager (npm) est correctement installé sur la machine, et "cd cours" pour naviguer vers un répertoire appelé "cours".


// Ensuite, la commande "npm init -y" crée un fichier package.json avec toutes les valeurs par défaut, confirmées automatiquement grâce au "y" (oui à tout) à la fin. Ce fichier est un gestionnaire de packages qui permet de télécharger et inclure des bibliothèques externes dans notre projet.


// Enfin, la fin du script mentionne l'utilisation de ces packages pour simuler une base de données.

// Le fichier package.json est un fichier qui se trouve à la racine d'un projet JavaScript, et qui permet de décrire les dépendances et les informations du projet, ainsi que des scripts à exécuter.
// Il contient des métadonnées telles que le nom du projet, la version, la description, l'auteur, les dépendances, les scripts, etc. Les développeurs utilisent ce fichier pour gérer les dépendances de leur projet et pour automatiser certaines tâches, comme la compilation, les tests, le lancement du serveur, etc. Le gestionnaire de paquets npm utilise le fichier package.json pour installer et gérer les dépendances du projet.

//******npm i -g json-server***********
// L'expression npm i -g json-server est une commande qui s'exécute via le terminal/commande prompt. Elle utilise le gestionnaire de paquets (NPM) de Node.js pour installer globalement (-g) le module json-server qui permet de créer rapidement un serveur HTTP RESTful pour des opérations CRUD sur un fichier JSON local.


// npm i est une commande raccourci pour npm install qui permet d'installer un ou plusieurs modules Node.js/JavaScript. En ajoutant l'option -g, la commande npm i -g permet d'installer un module de manière globale sur le système plutôt qu'au sein d'un projet

// creer un fichier db.json
//**** */ json-server --w db.json
//**** */npx json-server --w db.json


// json-server --w db.json est une commande qui permet de lancer un serveur HTTP local avec un ensemble d'API RESTful fictives disponibles à partir d'un fichier JSON appelé db.json.

// Cela signifie que vous pouvez utiliser des requêtes HTTP telles que GET, POST, PUT, DELETE pour interagir avec les données contenues dans le fichier db.json.

// Le --w permet de surveiller les modifications apportées au fichier db.json pour mettre à jour automatiquement le serveur en cas de modification.





// La principale différence entre les commandes json-server --w db.json et npx json-server --w db.json réside dans la façon dont elles sont exécutées.

// Dans le premier cas, la commande json-server est exécutée à partir d'un package local installé globalement sur le système. Cela signifie que la commande sera disponible à partir de n'importe quel endroit du système.

// Dans le second cas, la commande json-server est exécutée à partir d'un package installé localement dans le projet courant à l'aide de l'outil npx. npx est un outil qui permet d'exécuter les commandes des packages installés localement dans un projet, sans avoir besoin de les installer globalement sur le système. Cela permet de gérer les packages de manière plus efficace et de s'assurer que chaque projet utilise les versions de packages spécifiées dans son fichier package.json.


// En résumé, l'utilisation de npx json-server --w db.json permet de s'assurer que le projet utilise la version de json-server spécifiée dans son package.json, indépendamment des versions installées globalement sur le système.

const init2 = {
    method: "POST",
    // method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "rostodev",
        message: "yo les gens !",
    }),
    mode: "cors",
    credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit",
    () => {
        fetch("http://localhost:3000/posts", init2)
        // fetch("http://localhost:3000/posts/2", init2)
            // .then(() => console.log("data envoyée"));
    })

    //Ce script JavaScript utilise l'API Fetch pour récupérer et envoyer des données via un serveur de type RESTful. Voici une explication détaillée de chaque ligne :

    //** const init2 = { ... } :
    //  Cette ligne crée un objet appelé init2 qui contient les options de configuration de la requête HTTP.
    
    //**  method: "POST" :
    //  L'option method définit le type de requête HTTP utilisé. Ici, on utilise une requête de type POST pour envoyer une nouvelle ressource au serveur.
    
    //** headers: { "Content-Type": "application/json" } :
    //  L'option headers spécifie les en-têtes de la requête. Cet exemple utilise l'en-tête Content-Type pour déclarer qu'on envoie des données de type JSON.
    
    //**   body: JSON.stringify({ pseudo: "rostodev", message: "yo les gens !" }) : 
    // L'option body de la requête définit les données qui sont envoyées au serveur. Dans cet exemple, on envoie un objet JSON avec deux propriétés pseudo et message.
    
    //**  mode: "cors" : 
    // L'option mode de la requête spécifie le mode d'accès CORS. CORS (Cross-Origin Resource Sharing) est un mécanisme permettant de restreindre les ressources utilisées par des domaines différents. Ici, on autorise une requête entre des domaines différents.
    
    //**  credentials: "same-origin" :
    //  L'option credentials de la requête indique si les cookies et les informations d'authentification doivent être envoyés avec la requête.
   
    //**  document.querySelector("form").addEventListener("submit", () => { ... }) :
    //  Cette ligne ajoute un écouteur d'événements à un formulaire HTML. Lorsque l'utilisateur soumet le formulaire, la fonction fléchée sera exécutée.
    
    //**  fetch("http://localhost:3000/posts", init2) :
    //  Cette ligne envoie la requête HTTP au serveur. fetch est une méthode nativement supportée par les navigateurs web modernes, permettant de récupérer et d'envoyer des données via des requêtes HTTP. Le premier paramètre de fetch spécifie l'URL de destination de la requête, et le deuxième paramètre est l'objet de configuration de la requête créé en première ligne.
    
    //**  .then(() => console.log("data envoyée")) :
    //  Cette ligne récupère la réponse du serveur et affiche un message dans la console de développement du navigateur web lorsque la requête est effectuée avec succès.
    
    // En conclusion, ce script JavaScript utilise l'API Fetch pour envoyer une requête HTTP de type POST à un serveur de type RESTful, avec des données JSON spécifiées dans le corps de la requête



    //-----------------
    // Asynchrone
    //-----------------

    // **1
    setInterval(() => {
        // console.log("text");
    }, 2000);

    //**2
// Promise

// fetch("mon lien").then((res)=> res)

// async/await
async function fecthData() {

    await fectch('monlien')
    // attend que le await soit exécuté avant de faire la suite

    executeFonction();
}

//**  Fonction fléché

const  fetchData2 = async() => {

    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite

    executeFonction();
}

// Ce script JavaScript déclare une fonction asynchrone appelée "fetchData()". Cette fonction utilise l'instruction "await" pour attendre que la requête "fetch" vers l'URL "monlien" soit terminée avant de poursuivre l'exécution du code. "fetch" est une fonction native de JavaScript qui permet de récupérer des ressources à partir d'un serveur distant, par exemple un fichier JSON, un document HTML ou une image.

// Une fois que la requête est terminée, la fonction "executeFonction()" est appelée pour traiter les données récupérées ou effectuer une opération supplémentaire. L'utilisation de "await" permet d'attendre la fin de la requête avant d'exécuter cette fonction, car elle pourrait dépendre des données obtenues.

// Il est important de noter que pour utiliser l'instruction "await", la fonction parente doit être marquée comme "asynchrone", ce qui signifie qu'elle est capable d'utiliser "await" pour attendre des opérations asynchrones telles que "fetch". En résumé, ce code permet d'attendre la récupération de données depuis un serveur distant avant de réaliser d'autres opérations qui pourraient dépendre de ces données.


//----------------------------------
// LE JESON
//-----------------------

// Méthode .json() => méthode qui s'auto-résoud en rayant le Body de la requête.
fetch("data.json")
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    // Stringify => convertir en JSON
    let settings = JSON.stringify(data);
    // console.log(settings);
    //--Parse => transforme Json en object JS
    // console.log(JSON.parse(settings));

});



//----------
//**  Web API
//-----------

//Web API - Une API (Application Programming Interface) permet aux développeurs d'utiliser des fonctionnalités spécifiques dans leur code. Les Web API sont des interfaces qui permettent aux développeurs d'accéder à des fonctionnalités et des données du Web, telles que l'accès à des données de carte ou à des informations météorologiques. Les Web API sont souvent utilisées dans les applications Web, comme les navigateurs et les applications mobiles.

//----Utilisation de Web API : Par exemple, l'API Google Maps permet aux développeurs de créer des cartes interactives et de les intégrer dans leurs applications Web. Les développeurs peuvent utiliser cette API pour ajouter des fonctionnalités comme les marqueurs de lieux personnalisés ou des informations de trafic en temps réel.





//**  CLIENT STORAGE => stogage de 4ko----------
//-----------
//Client Storage - Le stockage client permet de stocker des informations sur le navigateur du client. Cela peut inclure des cookies, des données de session ou du stockage local. Le stockage client est utile pour stocker des données de configuration utilisateur, des informations de session et des préférences utilisateur.

//---------Utilisation de Client Storage : Par exemple, les cookies permettent aux développeurs de stocker des informations sur les préférences utilisateur, telles que la langue préférée, ou d'authentifier les utilisateurs pour sécuriser les données.






//**Local Storage => stogage de 10Mo----------------

//Local Storage - Cette API permet aux développeurs de stocker des données sur l'appareil du client, dans le navigateur. Le stockage local est une méthode de stockage de données persistante qui permet de stocker des données ré-élaborées en interne sur le client pour une utilisation future. Les données stockées dans le stockage local peuvent être utilisées pour stocker des préférences utilisateur, des paramètres de l'application et des données utilisateur.

//------Utilisation de Local Storage : Par exemple, les développeurs peuvent utiliser le stockage local pour stocker les préférences de l'utilisateur, telles que la taille de la police, le mode foncé / clair, ou les données des utilisateurs, comme des produits ajoutés au panier. Cela permet aux applications Web de stocker ces informations localement, plutôt que de les stocker sur un serveur distant, ce qui peut réduire les temps de chargement et améliorer l'expérience utilisateur.


//localStorage est un objet de window
localStorage.data ="je stock la data";

//recuperer cette data
//  console.log(localStorage.data);
 document.body.textContent = localStorage.data;

//suprimer un élèment storage
//  localStorage.removeItem("data");

const obj = {
    name: "Eva",
    age: 11
}

//--- il faut passer des chaines de caractères
localStorage.user = obj;
 console.log(obj);

//--- convertir cet objet en string( en json) lorsqu'on insert
localStorage.user = JSON.stringify(obj);


//---recupere  le JSON et l'interpreté
console.log(localStorage.user);
//  transformer en object JS lors de la sorti
console.log(JSON.parse(localStorage.user));


//**  Session Storage 

// Session Storage en JavaScript permet de stocker des données de manière temporaire et qui persistent uniquement pendant la durée de la session de navigation en cours dans le navigateur web. Cela signifie que ces données sont supprimées lors de la fermeture de la session de navigation ou fermeture du navigateur.
//---------Pour accéder et stocker des données dans Session Storage, on peut utiliser deux méthodes :

//setItem() : cette méthode permet de stocker une paire clé - valeur

//getItem() : cette méthode permet de récupérer la valeur de la paire clé - valeur stockée précédemment.

//Voici un exemple de code JavaScript pour utiliser Session Storage :

// Stocker une donnée
sessionStorage.setItem("nom", "rostodev");


// Récupérer la donnée
let nom = sessionStorage.getItem("nom");

// document.body.innerHTML = sessionStorage.nom;
// Afficher la donnée récupérée

console.log(`Nom: ${nom}` );


// Supprimer la donnée
 sessionStorage.removeItem("nom");


//Il est important de noter que Session Storage est limité par la quantité de stockage local disponible dans le navigateur, en général 5 à 10 Mo en fonction du navigateur utilisé. Il est également important de prendre en compte que les données stockées dans Session Storage sont visibles par l'ensemble des scripts sur la même page, ce qui peut représenter un risque pour la sécurité de l'application si des données sensibles sont stockées.


// Enregistrer des données dans sessionStorage
sessionStorage.setItem('clé', 'valeur');

// Récupérer des données depuis sessionStorage
let data = sessionStorage.getItem('clé');

// Supprimer des données de sessionStorage
 sessionStorage.removeItem('clé');

// Supprimer toutes les données de sessionStorage
 sessionStorage.clear();


//**  Cookies
// Les cookies sont de petits fichiers de données stockés sur l'ordinateur d'un utilisateur par le navigateur Web. Ils sont utilisés pour stocker de petites quantités d'informations, telles que les préférences de l'utilisateur, les données de connexion ou les informations de suivi.


//En JavaScript, les cookies peuvent être manipulés avec le document.cookie propriété, qui permet de lire, d'écrire et de supprimer des cookies.


//utilisation des cookies en JavaScript :

document.cookie="username=Rostodev";

//Bonne pratique
document.cookie = "pseudo=Rosto;path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;";

//---Stocker des préférences utilisateur ---:

// Enregistrer un cookie contenant la langue préférée de l'utilisateur



document.cookie = "lang=fr; expires=Fri, 31 Dec 2099 23:59:59 GMT; ";

// Lire la valeur du cookie
const  lang = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// Supprimer le cookie
document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

//---Stocker des données de connexion :--
// Enregistrer un cookie contenant les informations de connexion de l'utilisateur
document.cookie = "session_id=abc123; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

// Vérifier si l'utilisateur est connecté en lisant le cookie
if (document.cookie.indexOf("session_id=abc123") !== -1) {
  // L'utilisateur est connecté
} else {
  // L'utilisateur n'est pas connecté
}

// Supprimer le cookie lors de la déconnexion
document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";



//---Suivi d'utilisateur :---
// Enregistrer un cookie contenant un identifiant unique pour l'utilisateur
document.cookie = "user_id=123; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

// Enregistrer un cookie contenant la date et l'heure de la visite de l'utilisateur
document.cookie = "last_visit=" + new Date().toISOString() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

// Lire la valeur du cookie d'identification utilisateur
var user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// Lire la valeur du cookie de dernière visite
var last_visit = document.cookie.replace(/(?:(?:^|.*;\s*)last_visit\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// Supprimer le cookie d'identification utilisateur lors de la suppression du compte utilisateur
document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// Supprimer le cookie de dernière visite après un certain temps d'inactivité
document.cookie = "last_visit=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

//Il est important de noter que les cookies peuvent présenter des risques pour la vie privée des utilisateurs s'ils sont utilisés de manière abusive. Il est donc recommandé de n'utiliser les cookies que pour stocker des informations qui sont utiles et nécessaires pour le fonctionnement d'un site Web.