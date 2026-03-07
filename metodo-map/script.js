const tema = document.querySelector('#itema')
let menu = [...document.getElementsByClassName("menu")]
let cont
tema.addEventListener('click', () => menu.forEach(element => {
    cont++
    if (cont==1){
    for(v of menu) {v.style.backgroundColor = 'red'}
    
    if (cont == 2) {for(v of menu) {v.style.backgroundColor = 'blue'}
    }}else {cont = 0}
    
}))
console.log(cont)


