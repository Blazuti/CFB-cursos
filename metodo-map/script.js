const tema = document.querySelector('#itema')
let menu = [...document.getElementsByClassName("menu")]
let colecao = {}
let cont = 0
tema.addEventListener('click', () => {
    if (cont == 0){menu.map((t) =>{
        t.style.backgroundColor = 'grey'})
        cont++
    }else{menu.map((t)=>{
        t.style.backgroundColor = 'blue'})
        cont=0
    }
    console.log(corpo)})
    
