// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");

function Blague(){
fetch("https://api.blablagues.net/?rub=blagues")
.then((res) => res.json())
.then((info)=>{
     console.log(info.data);
     const blague=info.data.content
     header.textContent = blague.text_head;
     content.textContent = blague !==""
     ?blague.text_hidden 
     : blague.text
     ;

     
    }
    )
}
Blague();
    btn.addEventListener('click', Blague);
    


























// const header = document.getElementById("header");
// const content = document.getElementById("content");


// function getJoke(){

//     fetch("https://api.blablagues.net/?rub=blagues")
//     .then((res)=> res.json())
//     .then((data) => {
//         console.log(data.data.content);
        
//         header.textContent = data.data.content.text_head;
//         content.textContent = data.data.content.text !=="" 
//         ?data.data.content.text
//         :data.data.content.text_hidden ;
//     });
// }
// getJoke();

// btn.addEventListener('click', getJoke
// //  ()=> console.log('test')
 
 
//  );

