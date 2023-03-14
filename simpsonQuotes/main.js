
const quoteElement = document.querySelector('[data-quote]');
const imageElement = document.querySelector('[data-img]');
const characterElement = document.querySelector('[data-character]');

const getRandomQuoteBtn = document.querySelector('[random-btn]');




const requetURL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

// async function fetchSimpson404 (){
//     const response = await fetch(requetURL)
//     if(!response.ok){
//         const message = `An error has ocurred: ${response.status}`
//         throw new Error(message)
//     }
//     const quotesSimpson = await response.json();
//     return quotesSimpson
// }
// fetchSimpson404()
//     .then(error => console.log(error))
//     .catch(error => console.log(error.message))






getRandomQuoteBtn.addEventListener('click',async ()=>{
    showQuote();
    const quote = await getQuote();
    displayQuote(quote)
})

async function getQuote (){
    const response = await fetch(requetURL)
    const data = await response.json()
    console.log(data)
    return {
        'quote' : data[0].quote,
        'image' : data[0].image,
        'character' : data[0].character 
    };
}

function showQuote (){
    quoteElement.textContent = 'Loading...'
    imageElement.setAttribute('src', '');
    imageElement.setAttribute('title','')
}


function displayQuote (data){
    quoteElement.textContent = data.quote
    characterElement.textContent = data.character
    imageElement.setAttribute('src', data.image);
    imageElement.setAttribute('title', data.character)
    
}

