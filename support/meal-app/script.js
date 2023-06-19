const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

// async function fetchMeals() {
//     await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//       .then((res) => res.json())
//       .then((data) => (meals = data.meals));
  
//     console.log(meals);
//   }

// function mealsDisplay(){
//   meals.length = 12;
//     result.innerHTML = meals.map(
//         (meal) =>
//         ` <li class="card">
//               <h2> ${meal.strMeal}</h2>
//                <p> ${meal.strArea}</p>
//               <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">  
//           </li>
//         `
//     ).join("");
// }
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     fetchMeals().then(() => mealsDisplay());
// });
// fetchMeals();

//Ce code JavaScript permet de récupérer des données sur le site www.themealdb.com à partir de l'API RESTful de ce site. Plus spécifiquement, le script utilise l'API pour récupérer les détails des repas à base de poulet.


//Expliquons en détails ce que font les différentes lignes de code :

//const result = document.getElementById("result"); : cette ligne de code récupère l'élément HTML avec l'identifiant "result" et le stocke dans une variable appelée "result". Il s'agit probablement d'un élément HTML de type liste à puces où les repas seront affichés plus tard.

//const form = document.querySelector("form"); : cette ligne de code récupère le premier élément HTML de type formulaire ("form") sur la page et le stocke dans une variable appelée "form".

//const input = document.querySelector("input"); : cette ligne de code récupère le premier élément HTML de type input sur la page et le stocke dans une variable appelée "input". Il s'agit probablement d'un champ de recherche où l'utilisateur peut saisir des mots-clés pour trouver des recettes.

//let meals = []; : cette ligne de code initialise une variable vide appelée "meals" qui sera utilisée pour stocker les repas récupérés à partir de l'API.

//**async function fetchMeals() {...} :
// cette ligne de code définit une fonction asynchrone appelée "fetchMeals" qui utilisera l'API pour récupérer les détails des repas à base de poulet. Cette fonction attendra que les données soient récupérées avant de les stocker dans la variable "meals". Elle affichera également les repas sur la page avec la fonction "mealsDisplay()".

//**await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken") :
// cette ligne de code utilise la fonction fetch pour récupérer les repas à base de poulet à partir de l'API en attendant la réponse.

//** */.then((res) => res.json()) :
// cette ligne de code transforme les données de réponse reçues en un objet JavaScript.

//** */.then((data) => (meals = data.meals)); 
//: cette ligne de code stocke les repas dans la variable "meals", qui lui a été définie plus tôt.

//console.log(meals); : cette ligne de code affiche les repas récupérés dans la console de développement.

//function mealsDisplay(){...} : cette ligne de code définit une fonction qui prendra en charge l'affichage des repas récupérés sur la page. Elle itère sur les éléments de "meals" et construit une chaîne de caractères HTML qui sera insérée dans l'élément avec l'identifiant "result".

//form.addEventListener("submit", (e) => {...}) : cette ligne de code ajoute un événement de type "submit" sur le formulaire. Lorsque l'utilisateur soumet le formulaire, l'événement est déclenché et la fonction flèche anonyme (sans nom) est exécutée. Cette fonction empêchera la page de se recharger et utilisera les fonctions "fetchMeals" et "mealsDisplay" pour afficher les repas trouvés sur la page.

//fetchMeals(); : cette ligne de code appelle la fonction "fetchMeals" pour récupérer les données dès que la page est chargée.


// utiliser la porte d'entrer de la fonction fetchMeals ()
async function fetchMeals(search) {
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => res.json())
      .then((data) => (meals = data.meals));
  
    console.log(meals);
  }

function mealsDisplay(){
    if(meals === null){
        result.innerHTML = "<h2> Aucun résultat </h2>"
    }else{

        meals.length = 12;
        result.innerHTML = meals.map((meal) =>{
            let ingredients = [];
            for (i = 1; i < 21; i++) {
              if (meal[`strIngredient${i}`]) {
                let ingredient = meal[`strIngredient${i}`];
                let measure = meal[`strMeasure${i}`];
      
                ingredients.push(`<li>${ingredient} - ${measure}</li>`);
              }
            }
            console.log(ingredients);
            return `
              <li class ="card">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strArea}</p>
                <img src = ${meal.strMealThumb} alt="photo ${meal.strMeal}">
                <p>Ingredients</p>
                <ul>${ingredients.join("")}</ul>
                </li>
            `;
          });
        }
      }
      
        
        input.addEventListener("input", (e) => {
            // console.log(e.target.value);
            
            fetchMeals(e.target.value);  
        });
        
    
        form.addEventListener("submit", (e) =>{
    e.preventDefault();
    mealsDisplay();
});
fetchMeals();


// console.log(e.target.value);