const abecedario = [
    { l: "A", img: "img/a.png", p: "Alce" },
    { l: "B", img: "img/b.png", p: "Búho" },
    { l: "C", img: "img/c.png", p: "Cocodrilo" },
    { l: "D", img: "img/d.png", p: "Delfín" },
    { l: "E", img: "img/e.png", p: "Elefante" },
    { l: "F", img: "img/f.png", p: "Foca" },
    { l: "G", img: "img/g.png", p: "Gorila" },
    { l: "H", img: "img/h.png", p: "Hipopótamo" },
    { l: "I", img: "img/i.png", p: "Iguana" },
    { l: "J", img: "img/j.png", p: "Jirafa" },
    { l: "K", img: "img/k.png", p: "Koala" },
    { l: "L", img: "img/l.png", p: "León" },
    { l: "M", img: "img/m.png", p: "Marrano" },
    { l: "N", img: "img/n.png", p: "Nutria" },
    { l: "NN", img: "img/nn.png", p: "Ñandú" }, // Letra especial pondría NN para diferenciarla de N//
    { l: "O", img: "img/o.png", p: "Oso" },
    { l: "P", img: "img/p.png", p: "Perro" },
    { l: "Q", img: "img/q.png", p: "Queso" },
    { l: "R", img: "img/r.png", p: "Rana" },
    { l: "S", img: "img/s.png", p: "Serpiente" },
    { l: "T", img: "img/t.png", p: "Tucán" },
    { l: "U", img: "img/u.png", p: "Unicornio" },
    { l: "V", img: "img/v.png", p: "Vaca" },
    { l: "W", img: "img/w.png", p: "Waffle" },
    { l: "X", img: "img/x.png", p: "Xilófono" },
    { l: "Y", img: "img/y.png", p: "Yate" },
    { l: "Z", img: "img/z.png", p: "Zebra" }
];

function seleccionarLetra(letra) {
    const visor = document.getElementById("pantalla-imagen");
    const item = abecedario.find(a => a.l === letra);
    if (item) {
        visor.innerHTML = `
            <img src="${item.img}" alt="${item.p}">
            <h2>${item.l} de ${item.p}</h2>
        `;
    }
}

function renderizarGaleria(lista) {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = ""; 
    lista.forEach(item => {
        const btn = document.createElement("button");
        btn.innerText = item.l;
        btn.className = "carta";
        btn.onclick = () => seleccionarLetra(item.l);
        galeria.appendChild(btn);
    });
}

function verTodoElABC() { renderizarGaleria(abecedario); }

function verSoloVocales() {
    const vocales = ["A", "E", "I", "O", "U"];
    renderizarGaleria(abecedario.filter(a => vocales.includes(a.l)));
}

// Iniciar al cargar la página
window.onload = verTodoElABC;