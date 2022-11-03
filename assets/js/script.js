const apiData = [];

const apiEndpoint = "http://api.tvmaze.com/show";

const section = document.getElementById("movies");

const fetchShow = () => {
  fetch(apiEndpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiData.push(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      apiData[0].map((obj) => cards(obj));
    });
};
7;

const cards = (data) => {
  section.innerHTML += `
    <figure class="cards">
    <div class="container"> 
      <img class="imgCards" class src=${data.image.medium} alt=${data.name}>
      <h2 class="title">${data.name}</h2>
      <p class="genres">${data.genres}</p>
      <p class="runtime">${data.runtime} min</p>
      <p class="rating">${data.rating.average}<span class="star">⭐️</span></p>
    </div>
    </figure>
  `;
};

fetchShow();
