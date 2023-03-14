//DOM Elements//
const jokeElement = document.querySelector('[joke-data]');
const jokeBtn = document.querySelector('[joke-btn]');
let joke = {};



const getURL = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ace148df6amsh71b55ea24a31862p190e40jsn97bbcea46d32',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
}


jokeBtn.addEventListener('click',() => {
    getJoke();
    displayJoke()
})

async function getJoke(n){
    await fetch(getURL, options)
        .then((response)=>response.json())
        
        .then((data)=> {
            joke = {
                'setup':data.body[0].setup,
                'punchline': data.body[0].punchline
            }
        })
        
        
}

function displayJoke (){
    if(Object.values(joke).length != 0)
    jokeElement.textContent = `
    Setup: ${joke.setup},
    Punchline: ${joke.punchline}
    `
}



