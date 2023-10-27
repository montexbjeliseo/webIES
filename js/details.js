const loadContent = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const item = parseInt(urlParams.get('id')?? '1');

    const carrera = carreras.find((e) => e.id === item);

    const titleDOMElement = document.getElementById("item-title");
    titleDOMElement.textContent = carrera.nombre;

    const image = document.getElementById('product-detail');
    image.src = carrera.image;

    const descripcion = document.getElementById('descripcion');
    descripcion.textContent = carrera.descripcion;

    const salidaLaboral = document.getElementById('salida-laboral');
    
    for (let salida of carrera.salidasLaborales) {
        const li = document.createElement('li');
        li.textContent = salida;
        salidaLaboral.appendChild(li);
    }

    const id_item = document.getElementById('id_item');
    id_item.value = carrera.id;
}

(function () {
    try {
        var items = document.createElement('script');
        items.src = 'js/items.js';
        document.head.appendChild(items);
        items.addEventListener("load", loadContent);
    } catch (err) {
        console.log(err);
    }

})();