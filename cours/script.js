// fetch("data.txt")
// .then((res)=> res.text())
// .then((data) => console.log(data));


// fetch("data.json")
// .then((res)=> res.json())
// .then((data) => console.log(data));
// fetch("data.json")
// .then((res) =>res.json())
// .then((data) => {
//     // console.log(data);
// });

// const myHeaders = new Headers();
// const init = {
//     method: "GET",
//     headers: myHeaders,
//     mode: "cors",
//     cache:"default"
// };


// fetch("data.json", init)
// .then((res) => console.log(res));

// fetch("https://facebook.com", init).then((res) => console.log(res));

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

// let form =document.querySelector("form");
// console.log(form);

document.querySelector("form").addEventListener("submit",
    () => {
        fetch("http://localhost:3000/posts", init2)
        .then(()=>{
            console.log("data envoyée");
        })
        
    })



    //---------------------------
    //Asynchrone
    //---------------------------


    //**1 
    setInterval(() => {
        // console.log("text");
    }, 2000);

    //**2 
    // Promise
    fetch("lien", "objet d'option" )
    .then((res) => res.json())
    .then((data)=> {
        //-------------
        //-------------
        //-------------
        //-------------
        console.log(data);
    })

//-------------------
//async/await
//-------------------------

async function fetchData(){

   await fetch("monLien")
   //--------------------
   

}
