const apiData = [];

const apiEndpoint = "http://api.tvmaze.com/show";

const section = document.getElementById("movies");
const numCards = 5;

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


const cards = (data) => {
  section.innerHTML += `
    <figure class="cards">
    <div class="container"> 
      <img class="imgCards" class src=${data.image.medium} alt=${data.name}>
      <h2 class="title">${data.name}</h2>
      <p class="genres">${data.genres}</p>
      <p class="runtime">${data.runtime} min</p>
      <div class="rat">
      <p class="rating">${data.rating.average}</p>
      <div class="star">⭐️</div>
      </div>
    </div>
    </figure>
  `;
};

fetchShow();
