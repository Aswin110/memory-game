async function pokeMon (id) {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const res = await url.json(); 
    const { name, sprites} = res;
    const imgUrl = sprites['front_default'];
    return {id, name, imgUrl }
}

async function fetchPokeMons (arrId) {
    try{
        const promises = await arrId.map((id) => pokeMon(id))
        const arrOfPokeMons = await Promise.all(promises);
        return arrOfPokeMons
    }
    catch(error){
        console.log('page not found', error);
    }
}

export default fetchPokeMons;