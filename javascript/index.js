function showResult(response){
    alert(response.data.answer);
}

let apiKey = "4ff060ct0o35c409303b648f04f0ab31";
let context = "be polite, inventive, and provide a very short answer";
let prompt = "who was the first female president in the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("prosessing");
axios.get(apiUrl) .then (showResult);

