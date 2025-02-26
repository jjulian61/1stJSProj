const searchtitle = document.getElementById('search__title'); 
const searchbar = document.getElementById('filtertitle');
let moviedata = [];

//Fetch data from API
async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=6c0f2b1f&s=good");
    const moviesdata = await movies.json();
    const userlitEl = document.querySelector(".user-list");

  




    
    

    

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




