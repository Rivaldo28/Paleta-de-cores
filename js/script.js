const color = document.querySelector("#color");
const saida = document.querySelector("#saida");

color.addEventListener("input", ()=>{
    const value = color.value;

    saida.innerHTML =  value;
    saida.style.background =value;
    saida.style.color = "#FFF";

    
});

if(color == "#FFFFFF"){
        saida.style.color = "#111111";
    }