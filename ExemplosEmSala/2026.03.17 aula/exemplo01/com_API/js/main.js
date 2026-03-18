import getCats from './theCatAPI.js'

window.addEventListener('DOMContentLoaded', function(){
    mostrarGatos();
})

const mostrarGatos = async () => {
    const gatos = await getCats();
    // console.log(gatos[0].breeds[0].origin)
    // console.log(gatos[0].breeds[0].name)
    // console.log(gatos[0].breeds[0].description)
    let boxGatos = document.getElementById('boxGatos');
    boxGatos.innerHTML = gatos.map(gato => `
    <figure>
        <img src=${gato.url} width=200>
            <details>
                <summary>Saiba mais</summary>
                <p>${gato.breeds[0].name}</p>
                <p>${gato.breeds[0].description}</p>
            </details>
    
    </figure>
    
    `).join("");
    

}

// live_uUMy3d1U9ygAIt1u6sMCnd9NYpLz6hOHPECqtb6pGEVkZ4IZrvqzDG11viqodKq9