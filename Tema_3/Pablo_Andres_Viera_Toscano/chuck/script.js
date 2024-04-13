document.addEventListener("DOMContentLoaded", function () {
  const joke = document.getElementById("chiste-joke");
  const obtenerChisteJoke = document.getElementById("obtenerChisteJoke");

  obtenerChisteJoke.addEventListener("click", function () {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el contenido del div con el chiste obtenido
        joke.textContent = data.value;
      })
      .catch((error) => {
        console.error("Error al obtener el chiste:", error);
      });
  });
});
