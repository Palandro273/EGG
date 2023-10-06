let clicks = 0
let contr = false
const fondo = document.querySelector(".fondo");
const verdef = document.querySelector(".verde");
const aguamarinaf = document.querySelector(".aguamarina");
const azulf = document.querySelector(".azul");
verdef.addEventListener("click", () => {
    fondo.style.backgroundColor = "green";
    console.log("Hola");
})
aguamarinaf.addEventListener("click", () => {
    fondo.style.backgroundColor = "aqua";
    console.log("Hola");
})
azulf.addEventListener("click", () => {
    fondo.style.backgroundColor = "blue";
    console.log("Hola");
})
function dea(){
    alert("Deam");
};
function contra(){
    if(contraseña.value=="HTMLover"){
        alert("Bienvenido "+nombre.value);
    }
    else{
        alert("Contraseña Inconrrecta");
    }
}
function multi(){
    const numero = document.getElementById("nummbr");
    const numero1 = document.getElementById("nummbr1");
    const numero2 = document.getElementById("nummbr2");
    const numero3 = document.getElementById("nummbr3");
    const numero4 = document.getElementById("nummbr4");
    const numero5 = document.getElementById("nummbr5");
    const numero6 = document.getElementById("nummbr6");
    const numero7 = document.getElementById("nummbr7");
    const numero8 = document.getElementById("nummbr8");
    const numero9 = document.getElementById("nummbr9");
    const numero10 = document.getElementById("nummbr10");
    numero.innerHTML = num.value;
    numero1.innerHTML = (num.value*1);
    numero2.innerHTML = (num.value*2);
    numero3.innerHTML = (num.value*3);
    numero4.innerHTML = (num.value*4);
    numero5.innerHTML = (num.value*5);
    numero6.innerHTML = (num.value*6);
    numero7.innerHTML = (num.value*7);
    numero8.innerHTML = (num.value*8);
    numero9.innerHTML = (num.value*9);
    numero10.innerHTML = (num.value*10);
}
function sumar(){
    clicks++;
    const clik = document.getElementById("cli");
    clik.innerHTML=clicks;
    return clicks;
}