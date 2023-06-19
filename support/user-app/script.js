
let userData1 = []; // notre boite
const fetchUser1 = () =>{

fetch("https://randomuser.me/api/?results=24")
.then((res) => res.json())
// .then((data) => console.log(data.results))
 .then((data) =>( userData1=data.results));
   console.log(userData1);

};
fetchUser1();


// La première ligne déclare une variable userData1 et initialise un tableau vide.

// La fonction fetchUser1 est définie comme une fonction fléchée qui sera appelée plus tard lors de l'exécution du code.

// La fonction fetchUser utilise l'API fetch pour appeler une API de génération aléatoire d'utilisateurs en ligne à l'aide d'un URL (https://randomuser.me/api/?results=24). Le paramètre results=24 est utilisé pour spécifier le nombre d'utilisateurs que nous souhaitons obtenir.

// La réponse fetch renvoie une promesse, qui est résolue dans la première méthode then. La réponse est transformée en JSON en utilisant la méthode json() qui elle aussi, renvoie une promesse.

// Dans la deuxième méthode then(), la réponse JSON est assignée à la variable userData1.

// Enfin, la fonction console.log affiche le tableau userData1.

// En dehors de la fonction fetchUser1, nous appelons la fonction après sa déclaration en utilisant fetchUser1().

// Pour résumer, ce script utilise l'API fetch pour récupérer des données JSON sur les utilisateurs, les transforme de manière asynchrone en utilisant des promesses, et stocke les données dans une variable appelée userData1 pour une utilisation ultérieure.

//----------------------
//async /await
//---------------------

let userData = []; // notre boite
const fetchUser = async() =>{

    await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
     .then((data) => (userData = data.results));
};

    const userDisplay = async () =>{
        await fetchUser();

        const dateParser = (date) =>{
            let newDate = new Date(date).toLocaleDateString("fr-FR",{
               year: "numeric",
               month: "long",
               day: "numeric",
               hour: "numeric",
            //    second: "numeric"
            });
            return newDate;
        };

        const dayCalc= (date) =>{
            let today = new Date();
            let todayTimestamp = Date.parse(today);
            let timestamp = Date.parse(date);
            return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
        };
                // Math.ceil()-> ciel =valeur superieure
                // Math.floor()-> fleur  =valeur inferieure
                // Math.random()-> aleatoire

        document.body.innerHTML = userData
        .map(
            (user) =>
            `
            <div class="card">
               <div class="image"> 
                 <img src=${user.picture.large}
                 alt="photo de ${user.name.last}">
              </div> 
             <h3> ${user.name.first} ${user.name.last}</h3>
             <p> ${user.location.city}, ${dateParser(user.dob.date)}</p>
             <em> Membre depuis : ${dayCalc(user.registered.date)} jours</em>

            </div>
            `
        )
        .join("");
    }
    userDisplay();

// La fonction fetchUser est définie en tant que fonction asynchrone (async). Cela signifie que la fonction retourne une promesse et peut être mise en pause (suspendue) en attendant que d'autres tâches soient effectuées.

// À l'intérieur de la fonction fetchUser, une requête fetch est effectuée pour récupérer des données JSON à partir de l'API Random User (24 utilisateurs dans cet exemple). Les données sont ensuite converties en un objet JSON à l'aide de la méthode .json().

// Lorsque les données JSON sont retournées, elles sont stockées dans la variable userData.

// Une constante userDisplay est définie. Cette constante est également une fonction asynchrone qui appelle la fonction fetchUser à l'aide de l'opérateur await, puis utilise la méthode .map() pour créer une chaîne HTML contenant les noms des utilisateurs. La méthode .join() crée une chaîne unique à partir des éléments dans le tableau.

// Finalement, la fonction userDisplay est appelée pour afficher les noms des utilisateurs dans le corps (body) du document HTML courant.

// En résumé, ce script récupère des données JSON à partir de l'API Random User, stocke les données dans une variable, puis affiche les noms des utilisateurs dans le document HTML du navigateur


//**____________________________________________________

//La première ligne déclare et initialise une fonction fléchée asynchrone nommée userDisplay.

//On attend que la fonction fetchUser() se termine avant d'exécuter le reste de la fonction.

//La fonction dateParser prend une date au format ISO et la formate au format français correspondant.

//La fonction dayCalc calcule le nombre de jours écoulés depuis la date donnée jusqu'à aujourd'hui.

//La ligne suivante utilise la méthode map() pour parcourir chaque élément (objet user) dans le tableau userData et générer une chaîne HTML en utilisant des templates de littéraux. Pour chaque user, une carte de présentation est créée avec son nom, sa photo de profil, la ville où il réside, la date de naissance formatée et le nombre de jours écoulés depuis son inscription.

//La fonction join() crée une chaîne unique en concaténant tous les éléments HTML générés par la méthode map().

//La méthode innerHTML de l'objet document.body est utilisée pour insérer la chaîne HTML générée dans le corps de la page.

//La dernière ligne appelle la fonction userDisplay() pour démarrer le processus d'affichage des données dans la page web.