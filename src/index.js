function generateAnswer(event) {
  event.preventDefault();
  new Typewriter("#ai-answer", {
    strings: "Choose a pot with drainage holes. Use well-draining soil,",
    autoStart: true,
    delay: 4,
  });
}

let aiSearchForm = document.querySelector("#ai-search");
aiSearchForm.addEventListener("submit", generateAnswer);
