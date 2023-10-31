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
    const resultElementDiv = document.createElement('div');

    const a = document.createElement('a');
    a.href = './shop-single.html?id=' + carrera.id;
    a.textContent = carrera.nombre;
    a.classList.add('link-dark');
    resultElementDiv.classList.add('position-relative')

    const badge = document.createElement('span');
    badge.classList.add(
        'position-absolute',
        'top-0',
        'start-100',
        'translate-middle',
        'badge',
        'rounded-pill',
        'bg-success'
    );

    badge.textContent = 'Carrera';

    resultElementDiv.appendChild(a);
    resultElementDiv.appendChild(badge);
    return resultElementDiv;
}

const mostrarEnlaces = (resultados) => {

    const resultContainer = document.getElementById('modal-search-results');
    resultContainer.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.classList.add('h1');
    resultContainer.appendChild(h1);
    if (resultados.length === 0) {
        h1.textContent = 'No hay resultados';
        return;
    }

    h1.textContent = 'Resultados';

    for (let carrera of resultados) {
        const div = document.createElement('div');
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