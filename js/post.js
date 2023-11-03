const obtenerPosteo = async (id) => {
    let url = window.location.href.split('/');
    url.pop();
    url = url.join('/');
    return await fetch(`${url}/data/post-${id}.json`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

const mostrarPosteo = (post) => {
    document.title = "IES Machagai: " + post.titulo;
    const postTitle = document.querySelector('#post-title');
    postTitle.textContent = post.titulo;
    const postOverview = document.querySelector('#post-overview');
    postOverview.textContent = post.resumen;
    const postSubtitle = document.querySelector('#post-subtitle');
    postSubtitle.textContent = post.subtitulo;

    const postContents = document.querySelector('#post-contents');
    postContents.innerHTML = '';

    for (const content of post.contenidos) {
        if (content.encabezado) {
            const encabezado = document.createElement('h4');
            encabezado.textContent = content.encabezado;
            postContents.appendChild(encabezado);
        }
        const postContent = document.createElement('p');
        postContent.textContent = content.contenido;
        postContents.appendChild(postContent);
    }
}

const showNotFoundError = () => {
    document.title = "IES Machagai: Posteo no encontrado";
    const postTitle = document.querySelector('#post-title');
    postTitle.textContent = "Error 404: no encontrado";
    const postOverview = document.querySelector('#post-overview');
    postOverview.textContent = "No se encontrado el articulo buscado";
}

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id') ?? '1');
    try {
        const post = await obtenerPosteo(id);
        mostrarPosteo(post);
    } catch (error) {
        showNotFoundError();
        console.error(error);
    }

});
