const carreras = [
    {
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN CIENCIAS DE LA ADMINISTRACIÓN",
        image: "img/IES_logo.svg",
        rating: 4,
    },
    {
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN GEOGRAFÍA",
        image: "img/IES_logo.svg",
        rating: 4,
    },
    {
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO DE HISTORIA",
        image: "img/IES_logo.svg",
        rating: 4,
    },
    {
        nombre: "PROFESORADO DE INGLÉS",
        image: "img/IES_logo.svg",
        rating: 5,
    },
    {
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN LENGUA Y LITERATURA",
        image: "img/IES_logo.svg",
        rating: 4,
    },
    {
        nombre: "PROFESORADO PARA EL NIVEL SECUNDARIO EN MATEMATICA",
        image: "img/IES_logo.svg",
        rating: 5,
    },
    {
        nombre: "TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE",
        image: "img/IES_logo.svg",
        rating: 3,
    },
    {
        nombre: "TECNICATURA SUPERIOR EN BROMATOLOGÍA",
        image: "img/IES_logo.svg",
        rating: 3,
    },
];

const crearIconoOjo = (link) => {
    const liEye = document.createElement("li");
    const aEye = document.createElement("a");
    aEye.className = "btn btn-success text-white mt-2";
    aEye.href = link;
    const iEye = document.createElement("i");
    iEye.className = "far fa-eye";
    aEye.appendChild(iEye);
    liEye.appendChild(aEye);

    return liEye;
};

const crearRatingStars = (rating) => {
    const ulStars = document.createElement("ul");
    ulStars.className = "list-unstyled d-flex justify-content-center mb-1";

    const liStars = document.createElement("li");
    liStars.innerHTML =
        '<i class="text-warning fa fa-star"></i>'.repeat(rating) +
        '<i class="text-muted fa fa-star"></i>'.repeat(5 - rating);

    ulStars.appendChild(liStars);

    return ulStars;
};

const crearExteriorTarjeta = () => {
    const divCardOuter = document.createElement("div");
    divCardOuter.className = "card mb-4 product-wap rounded-0";
    return divCardOuter;
};

const crearImagenCarrera = (imagen) => {
    const img = document.createElement("img");
    img.className = "card-img rounded-0 img-fluid";
    img.src = imagen;
    return img;
};

const crearOverlayTarjeta = (link) => {
    const divOverlay = document.createElement("div");
    divOverlay.className =
        "card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center";

    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    // Agregar el ojito
    ul.appendChild(crearIconoOjo(link));

    divOverlay.appendChild(ul);

    return divOverlay;
};

const crearInteriorTarjeta = (carrera) => {
    const divCardInner = document.createElement("div");
    divCardInner.className = "card rounded-0";

    const img = crearImagenCarrera(carrera.image);

    const divOverlay = crearOverlayTarjeta("shop-single.html");
    divCardInner.appendChild(img);
    divCardInner.appendChild(divOverlay);

    return divCardInner;
};

const crearCuerpoTarjeta = (carrera) => {
    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const aProduct = document.createElement("a");
    aProduct.href = "shop-single.html";
    aProduct.className = "h3 text-decoration-none";
    aProduct.textContent = carrera.nombre;

    const ulSizeAndColors = document.createElement("ul");
    ulSizeAndColors.className =
        "w-100 list-unstyled d-flex justify-content-between mb-0";

    divCardBody.appendChild(crearRatingStars(carrera.rating));
    divCardBody.appendChild(aProduct);
    divCardBody.appendChild(ulSizeAndColors);
    return divCardBody;
};

const crearTarjetaProducto = (carrera) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-md-4";

    const divCardOuter = crearExteriorTarjeta();
    const divCardInner = crearInteriorTarjeta(carrera);
    const divCardBody = crearCuerpoTarjeta(carrera);

    divCardOuter.appendChild(divCardInner);
    divCardOuter.appendChild(divCardBody);
    tarjeta.appendChild(divCardOuter);

    return tarjeta;
};

(function () {
    const carrerasContenedor = document.getElementById("carreras-row");
    for (let carrera of carreras) {
        carrerasContenedor.appendChild(crearTarjetaProducto(carrera));
    }
})();
