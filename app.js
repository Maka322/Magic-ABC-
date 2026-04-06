
const abecedario = [
    { l: "A", img: "img/a.png", p: "Ángel" },
    { l: "B", img: "img/b.png", p: "Barco" },
    { l: "C", img: "img/c.png", p: "Casa" },
    { l: "D", img: "img/d.png", p: "Dado" },
    { l: "E", img: "img/e.png", p: "Elefante" },
    { l: "F", img: "img/f.png", p: "Flor" },
    { l: "G", img: "img/g.png", p: "Gato" },
    { l: "H", img: "img/h.png", p: "Hielo" },
    { l: "I", img: "img/i.png", p: "Iglesia" },
    { l: "J", img: "img/j.png", p: "Jirafa" },
    { l: "K", img: "img/k.png", p: "Koala" },
    { l: "L", img: "img/l.png", p: "Luna" },
    { l: "M", img: "img/m.png", p: "Manzana" },
    { l: "N", img: "img/n.png", p: "Nube" },
    { l: "Ñ", img: "img/nn.png", p: "Ñandú" }, // Usamos 'nn' para evitar problemas con la Ñ en archivos compañeros//
    { l: "O", img: "img/o.png", p: "Oso" },
    { l: "P", img: "img/p.png", p: "Perro" },
    { l: "Q", img: "img/q.png", p: "Queso" },
    { l: "R", img: "img/r.png", p: "Ratón" },
    { l: "S", img: "img/s.png", p: "Sol" },
    { l: "T", img: "img/t.png", p: "Tren" },
    { l: "U", img: "img/u.png", p: "Uva" },
    { l: "V", img: "img/v.png", p: "Vaca" },
    { l: "W", img: "img/w.png", p: "Waffle" },
    { l: "X", img: "img/x.png", p: "Xilófono" },
    { l: "Y", img: "img/y.png", p: "Yate" },
    { l: "Z", img: "img/z.png", p: "Zebra" }
];

// Visualización: Mostrar la imagen y el nombre de la letra seleccionada
//

function seleccionarLetra(letraPresionada) {
    const visor = document.getElementById("pantalla-imagen");
    const encontrada = abecedario.find(item => item.l === letraPresionada);

    if (encontrada) {
         visor.innerHTML = `
            <img src="${encontrada.img}" alt="${encontrada.p}" class="img-animada">
            <h2>${encontrada.l} de ${encontrada.p}</h2>
        `;
    }
}

function cargarGaleria() {
    const galeria = document.getElementById("galeria"); 
    
    abecedario.forEach(letra => {
        const boton = document.createElement("button");
        boton.innerText = letra.l;
        boton.onclick = () => seleccionarLetra(letra.l);
        galeria.appendChild(boton);
    });
}

