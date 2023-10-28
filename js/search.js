const carrerasData = [
    {
        "id": 1,
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN CIENCIAS DE LA ADMINISTRACIÓN"
    },
    {
        "id": 2,
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN GEOGRAFÍA"
    },
    {
        "id": 3,
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO DE HISTORIA"
    },
    {
        "id": 4,
        "nombre": "PROFESORADO DE INGLÉS"
    },
    {
        "id": 5,
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN LENGUA Y LITERATURA"
    },
    {
        "id": 6,
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN MATEMÁTICA"
    },
    {
        "id": 7,
        "nombre": "TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE"
    },
    {
        "id": 8,
        "nombre": "TECNICATURA SUPERIOR EN BROMATOLOGÍA"
    }
];

const searchCarrera = (entrada) => {
    entrada = entrada.toLowerCase();
    const encontrados = [];
    for (let carrera of carrerasData) {
        if (carrera.nombre.toLowerCase().includes(entrada) && entrada !== '') {
            encontrados.push(carrera);
        }
    }
    return encontrados;
}

const crearEnlace = (carrera) => {
    const a = document.createElement('a');
    a.href = './shop-single.html?id=' + carrera.id;
    a.textContent = carrera.nombre;
    return a;
}

const mostrarEnlaces = (resultados) => {
    
    const enlaces = document.querySelectorAll("#modal-search-results a");
    console.log(enlaces)
    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
    
    const resultContainer = document.getElementById('modal-search-results');
    resultContainer.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Resultados';
    h1.classList.add('h1');
    resultContainer.appendChild(h1);
    for (let carrera of resultados) {
        const div = document.createElement('div');
        div.style.userSelect = 'all';
        div.appendChild(crearEnlace(carrera));
        resultContainer.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.getElementById("inputModalSearch");
    inputSearch.addEventListener("keyup", function (event) {
        try {
            mostrarEnlaces(searchCarrera(event.target.value));
        } catch (err) {
            console.log(err);
        }
    });
});