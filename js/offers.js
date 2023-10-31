const params = {
    filter: 'all'
}

const loadContent = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('filter')??'all';

    params.filter = categoria;

    const cardContainer = document.getElementById('carreras-row');
    cardContainer.innerText = '';

    let filtered = carreras;

    if (params.filter !== 'all') {
        filtered = carreras.filter((carrera) => {
            return carrera.categoria === params.filter;
        });
    }

    crearTarjetas(filtered, cardContainer);
}

const crearTarjetas = (carreras, container) => {
    for (let carrera of carreras) {
        container.appendChild(crearTarjeta(carrera));
    }
}

const crearOverlay = (carrera) => {
    const overlay = document.createElement('div');
    overlay.classList.add('card-img-overlay', 'rounded-0', 'product-overlay', 'd-flex', 'align-items-center', 'justify-content-center');

    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled');
    const eyeli = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('btn', 'btn-success', 'text-white', 'mt-2');
    a.href = './shop-single.html?id=' + carrera.id;

    const eyeIcon = document.createElement('i');
    eyeIcon.classList.add('far', 'fa-eye');

    a.appendChild(eyeIcon);
    eyeli.appendChild(a);

    ul.appendChild(eyeli);
    overlay.appendChild(ul);

    return overlay;
}

const crearBodyCard = (carrera) => {
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body');
    const a = document.createElement('a');
    a.classList.add('h3', 'text-decoration-none');
    a.href = './shop-single.html?id=' + carrera.id;
    a.textContent = carrera.nombre;
    cardbody.appendChild(a);
    return cardbody;
}

const crearTarjeta = (carrera) => {
    const container = document.createElement('div');
    container.classList.add('col-md-4');

    const card = document.createElement('div');
    card.classList.add('card', 'mb-4', 'product-wap', 'rounded-0');
    const cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('card', 'rounded-0');

    const img = document.createElement('img');
    img.classList.add('card-img', 'rounded-0', 'img-fluid');
    img.src = carrera.image;

    cardImgContainer.appendChild(img);

    card.appendChild(cardImgContainer);

    cardImgContainer.appendChild(crearOverlay(carrera));

    card.appendChild(crearBodyCard(carrera));

    container.appendChild(card);

    return container;
}

(function () {
    try {
        var items = document.createElement('script');
        items.src = 'js/items.js';
        document.head.appendChild(items);
        items.addEventListener("load", loadContent);

        document.getElementById('filterbtn-todo').href = '?filter=all';

        document.getElementById('filterbtn-formacion-docente').href = '?filter=Profesorado';

        document.getElementById('filterbtn-tecnicatura').href = '?filter=Tecnicatura';

    } catch (err) {
        console.log(err);
    }

})();

const filterByCategory = (category) => {
    params.filter = category;
    loadContent();
}