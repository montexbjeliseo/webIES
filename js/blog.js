const posteos = [
    {
        id: 1,
        titulo: 'La Importancia de la Educación Superior en el Siglo XXI',
        subtitulo: 'Preparando a los Estudiantes para un Futuro de Desafíos y Oportunidades'
    },
    {
        id: 2,
        titulo: 'El Impacto de la Tecnología en la Educación Superior',
        subtitulo: 'Preparando a los Estudiantes para el Futuro Digital'
    },
    {
        id: 3,
        titulo: 'Desarrollo de Habilidades Profesionales en la Educación Superior',
        subtitulo: 'Preparando a los Estudiantes para el Éxito en el Mundo Laboral'
    }
];

function crearTarjetaDePublicacion(post) {

    const divRow = document.createElement("div");
    divRow.className = "row";
    divRow.id = "post-card-" + post.id;

    const divCard = document.createElement("div");
    divCard.className = "card mb-3";

    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const h1Titulo = document.createElement("h2");
    h1Titulo.className = "card-title";
    h1Titulo.textContent = post.titulo;

    const pResumen = document.createElement("p");
    pResumen.className = "card-text";
    pResumen.textContent = post.subtitulo;

    const aEnlace = document.createElement("a");
    aEnlace.className = "card-link";
    aEnlace.textContent = "Seguir leyendo...";
    aEnlace.href = "post-details.html?id=" + post.id;

    divCardBody.appendChild(h1Titulo);
    divCardBody.appendChild(pResumen);
    divCardBody.appendChild(aEnlace);

    divCard.appendChild(divCardBody);
    divRow.appendChild(divCard);

    return divRow;
}

const mostrarPosteos = (posteos, container) => {
    
    for (let post of posteos) {
        container.appendChild(crearTarjetaDePublicacion(post));
    }
}

const postContainer = document.querySelector('#posts');
mostrarPosteos(posteos, postContainer);