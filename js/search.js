const get_base_url = () => {
    let url = window.location.href.split('/');
    url.pop();
    return url = url.join('/');
}

const searchData = [
    {
        "nombre": 'La Importancia de la Educación Superior en el Siglo XXI',
        "tag": "post",
        "enlace": "/post-details.html?id=1"
    },
    {
        "nombre": 'El Impacto de la Tecnología en la Educación Superior',
        "tag": "post",
        "enlace": "/post-details.html?id=2"
    },
    {
        "nombre": 'Desarrollo de Habilidades Profesionales en la Educación Superior',
        "tag": "post",
        "enlace": "/post-details.html?id=3"
    },
    {
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN CIENCIAS DE LA ADMINISTRACIÓN",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=1"
    },
    {
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN GEOGRAFÍA",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=2"
    },
    {
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO DE HISTORIA",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=3"
    },
    {
        "nombre": "PROFESORADO DE INGLÉS",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=4"
    },
    {
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN LENGUA Y LITERATURA",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=5"
    },
    {
        "nombre": "PROFESORADO PARA EL NIVEL SECUNDARIO EN MATEMÁTICA",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=6"
    },
    {
        "nombre": "TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=7"
    },
    {
        "nombre": "TECNICATURA SUPERIOR EN BROMATOLOGÍA",
        "tag": "carrera",
        "enlace": "/shop-single.html?id=8"
    }
];

const search = (entrada) => {
    entrada = entrada.toLowerCase();
    const encontrados = [];
    for (let data of searchData) {
        if ((data.nombre.toLowerCase().includes(entrada) || data.tag.includes(entrada)) && entrada !== '') {
            encontrados.push(data);
        }
    }
    return encontrados;
}

const crearEnlace = (data) => {
    const resultElementDiv = document.createElement('div');

    const a = document.createElement('a');
    a.href = get_base_url() + data.enlace;
    a.textContent = data.nombre;
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
        data.tag === 'carrera' ? 'bg-success' : 'bg-secondary'
    );

    badge.textContent = data.tag;

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

    for (let resultado of resultados) {
        const div = document.createElement('div');
        div.appendChild(crearEnlace(resultado));
        resultContainer.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.getElementById("inputModalSearch");
    inputSearch.addEventListener("keyup", function (event) {
        try {
            mostrarEnlaces(search(event.target.value));
        } catch (err) {
            console.log(err);
        }
    });
});