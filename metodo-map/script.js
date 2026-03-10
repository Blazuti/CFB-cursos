const tema = document.querySelector('#itema')
let menu = [...document.getElementsByClassName("menu")]
let cont
tema.addEventListener('click', () => { for(let t in menu){
    
    console.log(t)
} })