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

function crearIconoOjo(link) {
    let liEye = document.createElement("li");
    let aEye = document.createElement("a");
    aEye.className = "btn btn-success text-white mt-2";
    aEye.href = link;
    let iEye = document.createElement("i");
    iEye.className = "far fa-eye";
    aEye.appendChild(iEye);
    liEye.appendChild(aEye);

    return liEye;
}

function crearRatingStars(rating) {
    let ulStars = document.createElement("ul");
    ulStars.className = "list-unstyled d-flex justify-content-center mb-1";

    let liStars = document.createElement("li");
    liStars.innerHTML =
        '<i class="text-warning fa fa-star"></i>'.repeat(rating) +
        '<i class="text-muted fa fa-star"></i>'.repeat(5 - rating);

    ulStars.appendChild(liStars);

    return ulStars;
}

function crearTarjetaProducto(carrera) {
    let divCol = document.createElement("div");
    divCol.className = "col-md-4";

    let divCardOuter = document.createElement("div");
    divCardOuter.className = "card mb-4 product-wap rounded-0";

    let divCardInner = document.createElement("div");
    divCardInner.className = "card rounded-0";

    let img = document.createElement("img");
    img.className = "card-img rounded-0 img-fluid";
    img.src = carrera.image;

    let divOverlay = document.createElement("div");
    divOverlay.className =
        "card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center";

    let ul = document.createElement("ul");
    ul.className = "list-unstyled";

    // Agregar el ojito
    ul.appendChild(crearIconoOjo("shop-single.html"));

    divOverlay.appendChild(ul);
    divCardInner.appendChild(img);
    divCardInner.appendChild(divOverlay);
    divCardOuter.appendChild(divCardInner);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    let aProduct = document.createElement("a");
    aProduct.href = "shop-single.html";
    aProduct.className = "h3 text-decoration-none";
    aProduct.textContent = carrera.nombre;

    let ulSizeAndColors = document.createElement("ul");
    ulSizeAndColors.className =
        "w-100 list-unstyled d-flex justify-content-between mb-0";

    divCardBody.appendChild(crearRatingStars(carrera.rating));
    divCardBody.appendChild(aProduct);
    divCardBody.appendChild(ulSizeAndColors);

    divCardOuter.appendChild(divCardBody);
    divCol.appendChild(divCardOuter);

    document.getElementById("carreras-row").appendChild(divCol);
}

(function () {
    for (let carrera of carreras) {
        crearTarjetaProducto(carrera);
    }
})();
