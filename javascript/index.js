function displayQuote (response){
    console.log(response.data.answer);
    
    new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20
  });
}

function generateQuote(event) {
    event.preventDefault();

let apiKey = "4ff060ct0o35c409303b648f04f0ab31";
let context = "be Yoda from Starwars and provide a good answer";
let prompt = "giv me a creativ quote that Yoda would have given";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let quoteElement = document.querySelector("#quote");
quoteElement.innerHTML = "A quote for you we are generating.."

console.log("prosessing");
axios.get(apiUrl) .then (displayQuote);
}
let generatorButton = document.querySelector("#special-button");
generatorButton.addEventListener("click",generateQuote);



