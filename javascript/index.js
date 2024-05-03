function handleClick(response){
    return(response.data.answer)
    
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);

new Typewriter('#response', {
  strings: ['return'],
  autoStart: true,
});



function showResult(response){
    alert(response.data.answer);
}

let apiKey = "4ff060ct0o35c409303b648f04f0ab31";
let context = "be Yoda from Starwars and provide a good answer";
let prompt = "giv me a creativ quote that Yoda would have given";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("prosessing");
axios.get(apiUrl) .then (showResult);


