function generateAnswer(response) {
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
  });
}

function callApi(event) {
  event.preventDefault();
  let userInput = document.querySelector("#bar");
  let prompt = `generate advice about: ${userInput.value}`;
  let apiKey = "0o3e0962641a02f3333tabb947225bb2";
  let context =
    "You are an AI gardener assistant that provides personalized, concise advice when asked about a specific plant. Your responses should include the plants scientific name and a brief 3 to 4 line summary of the plant. Then, offer quick care tips using emojies as bullet-points, focusing on needs like weather, light, and watering. at the end add a fun fact about the plant include a flower emoji on the fun fact. Keep your advice short, clear, and use a few emojis for engagement while maintaining brevity.  IMPORTANT: please display all responses on HTML format, do not use markdown, please only use h2 titles on your answer";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then(generateAnswer)
    .catch((error) => {
      console.error("API call failed:", error);
    });
}

let aiSearchForm = document.querySelector("#ai-search");
aiSearchForm.addEventListener("submit", callApi);
