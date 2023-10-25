(function(){
    document.addEventListener('DOMContentLoaded', ()=>{
        const contact_form = document.getElementById('form-contacto');
        contact_form.addEventListener('submit', (e)=>{
            e.preventDefault();
            e.target.style.display = 'none';
            const data = Object.fromEntries(new FormData(e.target));
            // console.log(data);
            mostrarMensaje(e.target.parentNode);
        })
    })
})();

const mostrarMensaje = (parent)=> {
    const mensaje = document.createElement('div');
    mensaje.classList.add('alert', 'alert-success');
    const titulo = document.createElement('h1');
    titulo.classList.add('h1');
    titulo.textContent = 'Mensaje enviado!';

    const cuerpo = document.createElement('p');
    cuerpo.classList.add('p');
    cuerpo.textContent = 'Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.';

    const cta = document.createElement('a');
    cta.classList.add('btn', 'btn-success');
    cta.href = './';
    cta.textContent = 'Volver';

    mensaje.appendChild(titulo);
    mensaje.appendChild(cuerpo);
    mensaje.appendChild(cta);

    parent.appendChild(mensaje);
}