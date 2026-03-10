const itens = [...document.querySelectorAll(".curso")]
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_copiar = document.querySelector("#btn_copiar")
const btn_retornar = document.querySelector("#btn_retornar")
itens.map((el)=>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('selecionado')
    })
})

btn_copiar.addEventListener('click', ()=>{
    const itemSelecionado = [...document.querySelectorAll(".selecionado")]
    itemSelecionado.map((el)=>{
        caixa2.appendChild(el)
    })
})
btn_retornar.addEventListener('click', ()=>{
    const itemSelecionado = [...document.querySelectorAll(".selecionado")]
    itemSelecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})