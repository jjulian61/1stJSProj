const searchtitle = document.getElementById('search__title'); 
const searchbar = document.getElementById('filtertitle');
const searchyear = document.getElementById('search__year')
const yearbar = document.getElementById('filteryear')
let moviedata = [];

//Fetch data from API
async function main() {
  const title = document.getElementById("filtertitle").value
    const movies = await fetch(`https://www.omdbapi.com/?apikey=6c0f2b1f&s=${title}`);
    const moviesdata = await movies.json();
    const userlitEl = document.querySelector(".user-list");

    searchtitle.addEventListener ("input", (event) => {
      const searchTerm = event.target.input;
      console.log("Input changed:", searchTerm);
      // Perform actions based on input change

      
  });

  




    
    

    

    userlitEl.innerHTML = moviesdata.Search.map((user) =>
    `<div class="user-card">
              <div class="user-card__container">
                <h3 id="search__title">${user.Title}</h4>
                  <p id="search__year"><b>Year:</b> ${user.Year}</p>
                  <p id="search__id"><b>IMDB ID:</b> ${user.imdbID}</p>
                  <p id="search__type"><b>Type:</b> ${user.Type}</p>
                  <img src="${user.Poster}" alt="">
              </div>
    </div>`)
    .join("");

}

main();

async function second() {
  const year = document.getElementById("filteryear").value
    const movies1 = await fetch(`https://www.omdbapi.com/?apikey=6c0f2b1f&s=${year}`);
    const moviesdata1 = await movies1.json();
    const userlitEl1 = document.querySelector(".user-list");

    searchyear.addEventListener ("input", (event) => {
      const searchTerm1 = event.target.input;
      console.log("Input changed:", searchTerm);
      // Perform actions based on input change

      
  });
  userlitEl1.innerHTML = moviesdata1.Search.map((user) =>
    `<div class="user-card">
              <div class="user-card__container">
                <h3 id="search__title">${user.Title}</h4>
                  <p id="search__year"><b>Year:</b> ${user.Year}</p>
                  <p id="search__id"><b>IMDB ID:</b> ${user.imdbID}</p>
                  <p id="search__type"><b>Type:</b> ${user.Type}</p>
                  <img src="${user.Poster}" alt="">
              </div>
    </div>`)
    .join("");

}

second();




