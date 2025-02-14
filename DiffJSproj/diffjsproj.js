async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=6c0f2b1f&s=good");
    const moviesdata = await movies.json();
    const userlitEl = document.querySelector(".user-list");

    userlitEl.innerHTML = moviesdata.map((user) =>
    `<div class="user-card">
              <div class="user-card__container">
                <h3>${user.Title}</h4>
                  <p><b>Year:</b> ${user.Year}</p>
                  <p><b>IMDB ID:</b> ${user.imdbID}</p>
                  <p><b>Type:</b> ${user.Type}</p>
              </div>
    </div>`)
    .join("");

}

main();




