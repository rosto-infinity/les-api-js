const header = document.getElementById("header");
const content = document.getElementById("content");


function joke(){
fetch("https://api.blablagues.net/?rub=blagues")
.then((res)=> res.json())
.then((info) => {
    console.log(info);
    header.textContent =info.data.content.text_head;
   content.textContent =info.data.content.text;

});

}
joke();
btn.addEventListener('click', joke);