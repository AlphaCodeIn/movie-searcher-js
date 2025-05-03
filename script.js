let moviesCard = document.querySelector("#movieResult")
let searchBtn = document.querySelector("#searchBtn")
let input = document.querySelector("#searchInput")

function getMovies(name) {
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=7cf1ce3d`;

    moviesCard.innerHTML = `
    <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse flex flex-col md:flex-row">
                <div class="w-full md:w-1/3 h-100 bg-gray-700"></div>
                <div class="p-6 space-y-4 flex-1">
                    <div class="h-8 bg-gray-700 rounded w-1/2"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-700 rounded w-1/3"></div>
                        <div class="h-4 bg-gray-700 rounded w-2/3"></div>
                        <div class="h-4 bg-gray-700 rounded w-1/4"></div>
                        <div class="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-700 rounded w-1/3"></div>
                        <div class="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div class="h-4 bg-gray-700 rounded w-full"></div>
                    <div class="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
     </div>
    
    `
    return fetch(url).then((data) => data.json()).then((data) => {
        if (data.Response === "False") {
          moviesCard.innerHTML = `
          <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md max-w-xl mx-auto mt-6">
          <div class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v2m0 4h.01M5.07 5.07a10 10 0 0113.86 0M4.93 19.07a10 10 0 0014.14 0M12 3v1m0 16v1m8.66-5.66l-.7.7m-13.92 0l-.7-.7m16.62-6.64l-.7-.7m-13.92 0l-.7.7" />
          </svg>
          <span class="text-lg font-semibold">Movie Not Found</span>
         </div>
          <p class="mt-2 text-sm">We couldn't find any movie matching your search. Please try another title.</p>
          </div>
          `
          throw new Error(`Movie not found: ${data.Error}`);
        }
        return data;
      });
}

function setMovieName(movieName) {
    getMovies(movieName).then((movie) => {
        moviesCard.innerHTML = `
      <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
  <img src="${movie.Poster}" alt="Movie Poster" class="w-full md:w-1/3 object-cover">
  <div class="p-6 space-y-4">
    <h2 class="text-3xl font-semibold text-blue-400 mb-2">${movie.Title}</h2>

    <div class="space-y-2">
      <p class="text-gray-300">Year: <span class="text-blue-300">${movie.Year}</span></p>
      <p class="text-gray-300">Genre: <span class="text-blue-300">${movie.Genre}</span></p>
      <p class="text-gray-300">Duration: <span class="text-blue-300">${movie.Runtime}</span></p>
      <p class="text-gray-300">Language: <span class="text-blue-300">${movie.Language}</span></p>
    </div>

    <div class="space-y-2">
      <p class="text-gray-300">IMDb Rating: <span class="font-semibold text-yellow-400">${movie.imdbRating}</span></p>
    </div>

    <p class="text-gray-300">Plot: <span class="text-gray-400">${movie.Plot}</span></p>
  </div>
</div>

        `
    })
}


searchBtn.addEventListener("click", function () {
    inputValue = input.value.trim()
    setMovieName(inputValue)
});