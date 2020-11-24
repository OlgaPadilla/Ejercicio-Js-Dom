console.log("conectado")

const lista = document.getElementById("listaArray")
console.log(lista)
let paises = ["France", "Italia", "España", "Venezuela"]
paises.forEach(pais => {
    let liPais = document.createElement("li")
    const nombre = pais
    liPais.innerHTML = nombre
    lista.appendChild(liPais)

    console.log(liPais)
});

const cuadrado = document.getElementById("cuadrado1")

cuadrado.addEventListener("mouseover", cambiarForma)

function cambiarForma(){
    console.log("prueba")
    cuadrado.setAttribute("class", "circulo")
}

console.log(cuadrado)