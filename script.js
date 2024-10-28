const jokeEl = document.querySelector(".joke");
const updateBtn = document.getElementById("jokebtn");

// This method uses async await
const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const dadJokesRes = await fetch("https://icanhazdadjoke.com", config);

  const data = await dadJokesRes.json();
  return (jokeEl.innerHTML = data.joke);
};
generateJoke();

updateBtn.addEventListener("click", generateJoke);

// *The .then() Method
// const generateJoke = function () {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// };
// generateJoke();
