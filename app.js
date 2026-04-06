// Los datos: Letra + Imagen alusiva
const datos = {
    letras: [
        { l: "A", img: "🍎" }, { l: "B", img: "🎈" }, { l: "C", img: "🏠" },
        { l: "D", img: "🎲" }, { l: "E", img: "🐘" } // ... puedes seguir con todo el ABC
    ],
    vocales: [
        { l: "A", img: "🍎" }, { l: "E", img: "🐘" }, { l: "I", img: "🍦" },
        { l: "O", img: "🐻" }, { l: "U", img: "🍇" }
    ]
};

let letrasVistas = new Set(); // Usamos Set para no contar la misma letra dos veces

function generarCartas(tipo) {
    const contenedor = document.getElementById('galeria');
    contenedor.innerHTML = ""; // Limpiar la galería anterior

    datos[tipo].forEach(item => {
        const div = document.createElement('div');
        div.className = 'carta';
        div.innerText = item.l;
        
        div.onclick = () => mostrarEnVisor(item);
        contenedor.appendChild(div);
    });
}

function mostrarEnVisor(item) {
    const visor = document.getElementById('pantalla-imagen');
    // Mostramos el emoji o imagen grande
    visor.innerHTML = `
        <h1 style="font-size: 5rem; margin: 0;">${item.img}</h1>
        <h2>${item.l} de ${obtenerNombre(item.l)}</h2>
    `;

    // Contador
    letrasVistas.add(item.l);
    document.getElementById('cuenta').innerText = letrasVistas.size;
}

function obtenerNombre(letra) {
    const nombres = { "A": "Manzana", "B": "Balón", "C": "Casa", "D": "Dado", "E": "Elefante", "I": "Iglú", "O": "Oso", "U": "Uva" };
    return nombres[letra] || "Objeto";
}

// Empezar con el abecedario por defecto
generarCartas('letras');