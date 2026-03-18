const getCats = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng,asli,main,amau,pers&api_key=live_uUMy3d1U9ygAIt1u6sMCnd9NYpLz6hOHPECqtb6pGEVkZ4IZrvqzDG11viqodKq9";

    try {
        const resposta = await fetch(url);
        const gatos = await resposta.json();
        return gatos;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}

export default getCats;