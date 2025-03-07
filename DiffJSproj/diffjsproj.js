const searchtitle = document.getElementById("search__title");
const searchbar = document.getElementById("filtertitle");
const filtertype = document.getElementById("filtertype");
let moviedata = [];

// Fetch data from API
async function main() {
  const title = document.getElementById("filtertitle").value;
  if (!title) {
    alert("Please enter a movie or series title");
    return;
  }

  try {
    // Show loading state
    const userListEl = document.querySelector(".user-list");
    userListEl.innerHTML = '<div class="loading">Loading...</div>';

    // Fetch data from API
    const movies = await fetch(
      `https://www.omdbapi.com/?apikey=6c0f2b1f&s=${title}`
    );
    const moviesdata = await movies.json();

    // Check if we got valid results
    if (moviesdata.Response === "False") {
      userListEl.innerHTML = `<div class="error">No results found for "${title}"</div>`;
      return;
    }

    // Store data globally for filtering
    moviedata = moviesdata.Search;

    // Apply type filter if needed
    const selectedType = filtertype.value;
    let filteredData = moviedata;
    if (selectedType === "Movie" || selectedType === "Series") {
      filteredData = moviedata.filter(
        (item) => item.Type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Display results
    displayResults(filteredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    const userListEl = document.querySelector(".user-list");
    userListEl.innerHTML =
      '<div class="error">Error fetching data. Please try again.</div>';
  }
}

// Function to display results
function displayResults(data) {
  const userListEl = document.querySelector(".user-list");

  if (data.length === 0) {
    userListEl.innerHTML =
      '<div class="no-results">No matching results found</div>';
    return;
  }

  userListEl.innerHTML = data
    .map(
      (user) =>
        `<div class="user-card">
          <div class="user-card__container">
            <h3>${user.Title}</h3>
            <p><b>Year:</b> ${user.Year}</p>
            <p><b>IMDB ID:</b> ${user.imdbID}</p>
            <p><b>Type:</b> ${user.Type}</p>
            <img src="${
              user.Poster === "N/A" ? "placeholder.jpg" : user.Poster
            }" alt="${user.Title}">
          </div>
        </div>`
    )
    .join("");
}

// Add event listener for filter type changes
filtertype.addEventListener("change", () => {
  if (moviedata.length > 0) {
    const selectedType = filtertype.value;
    let filteredData = moviedata;
    if (selectedType === "Movie" || selectedType === "Series") {
      filteredData = moviedata.filter(
        (item) => item.Type.toLowerCase() === selectedType.toLowerCase()
      );
    }
    displayResults(filteredData);
  }
});

// Add event listener for search button
const searchButton =
  document.querySelector("#search-button") || document.createElement("button");
searchButton.addEventListener("click", main);

// Add event listener for search input (optional real-time search)
searchbar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    main();
  }
});




