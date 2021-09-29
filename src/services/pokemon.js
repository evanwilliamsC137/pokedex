//Export functions that takes in url and conversts information to json in a promise

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function getPokemon(url) {
    return new Promise(((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    }))
}