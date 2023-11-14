const portadaInstituto = [
    {
        titulo: "Forjando el Futuro Tecnológico",
        subtitulo: "Preparando Profesionales para un Mundo en Evolución",
        descripcion:
            "En nuestro instituto, estamos comprometidos a formar a la próxima generación de líderes en tecnología y educación. Nuestros programas de carreras técnicas y docentes brindan las habilidades y conocimientos necesarios para sobresalir en un mundo en constante cambio. Únete a nosotros y sé parte del cambio.",
        active: true,
        image: 'img/banner1.webp'
    },
    {
        titulo: "Tu Pasión, Tu Profesión       ",
        subtitulo: "Donde las Carreras Técnicas y Docentes Se Hacen Realidad",
        descripcion:
            "En nuestro instituto, transformamos tus pasiones en profesiones. Convertimos tu amor por la tecnología y la enseñanza en carreras exitosas. Con profesores experimentados y programas innovadores, te guiaremos hacia el éxito en las emocionantes carreras técnicas y docentes.",
        image: 'img/banner2.webp'
    },
    {
        titulo: "Excelencia en Educación Superior",
        subtitulo: "Desarrollando Habilidades Técnicas y Pedagógicas para el Éxito",
        descripcion:
            "En nuestro instituto, la excelencia es la norma. Nuestros programas de educación superior están diseñados para cultivar habilidades técnicas y pedagógicas de primera categoría. Con un enfoque en la calidad y la innovación, te preparamos para sobresalir en el campo de la tecnología y la educación.",
        image: 'img/banner3.webp'
    }
];

const carouselItem = (item) => {
    // Element
    const itemElement = document.createElement('div');
    itemElement.classList.add('carousel-item');
    if (item.active) {
        itemElement.classList.add('active');
    }

    // Container
    const container = document.createElement('div');
    container.classList.add('container')
    itemElement.append(container);

    // Row
    const row = document.createElement('div');
    row.classList.add('row', 'p-5');
    container.appendChild(row);

    // Column 1
    const col1 = document.createElement('div');
    col1.classList.add('mx-auto', 'col-md-8', 'col-lg-6', 'order-lg-last');
    row.appendChild(col1);
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.subtitulo;
    img.classList.add('img-fluid', 'object-fit-cover');
    col1.appendChild(img);

    // Column 2
    const col2 = document.createElement('div');
    col2.classList.add('col-lg-6', 'mb-0', 'd-flex', 'align-items-center');

    const textDiv = document.createElement('div');
    textDiv.classList.add('text-align-left', 'align-self-center');

    const h1 = document.createElement('h1');
    h1.textContent = item.titulo;
    h1.classList.add('h1');
    textDiv.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = item.subtitulo;
    h2.classList.add('h2');
    textDiv.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = item.descripcion;
    textDiv.appendChild(p);

    col2.appendChild(textDiv);
    row.appendChild(col2);
    return itemElement;
}

document.addEventListener('DOMContentLoaded', (e) => {
    const carouselInner = document.getElementsByClassName('carousel-inner')[0];
    carouselInner.innerHTML = '';
    for (item of portadaInstituto) {
        carouselInner.appendChild(carouselItem(item));
    }
});