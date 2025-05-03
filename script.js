let moviesCard = document.querySelector("#movieResult")
let searchBtn = document.querySelector("#searchBtn")
let input = document.querySelector("#searchInput")

function getMovies(name) {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=7cf1ce3d`;

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

// This is Not Related to Movies Search Project You Can remove This Section Of Code 
function _0x49d1(){var _0x2581b3=['93yUBhII','715ieKXaa','font-size:\x2016px;\x20color:\x20red;\x20font-weight:\x20bold;','1725423CVCuuJ','81948anvfHW','2627946yaHsag','%cLinkedIn:\x20https://www.linkedin.com/in/lucky-chauhan-12b18a25a/','22jsECFB','%cGitHub:\x20https://github.com/AlphaCodeIn/','432450GckcEx','20892VKudLH','11683990fNJNGF','8YCWfaW','log','688304gYzJEN','font-size:\x2014px;\x20color:\x20green;'];_0x49d1=function(){return _0x2581b3;};return _0x49d1();}function _0x4ad2(_0x325d47,_0x8fbeee){var _0x49d1c0=_0x49d1();return _0x4ad2=function(_0x4ad2ce,_0x332c84){_0x4ad2ce=_0x4ad2ce-0x105;var _0x177303=_0x49d1c0[_0x4ad2ce];return _0x177303;},_0x4ad2(_0x325d47,_0x8fbeee);}var _0x1c49f2=_0x4ad2;(function(_0x2472d8,_0x353a62){var _0xab040e=_0x4ad2,_0x1630a4=_0x2472d8();while(!![]){try{var _0x4d691f=-parseInt(_0xab040e(0x110))/0x1+-parseInt(_0xab040e(0x10b))/0x2+-parseInt(_0xab040e(0x112))/0x3*(parseInt(_0xab040e(0x106))/0x4)+parseInt(_0xab040e(0x113))/0x5*(-parseInt(_0xab040e(0x10c))/0x6)+-parseInt(_0xab040e(0x105))/0x7*(parseInt(_0xab040e(0x10e))/0x8)+parseInt(_0xab040e(0x107))/0x9+parseInt(_0xab040e(0x10d))/0xa*(parseInt(_0xab040e(0x109))/0xb);if(_0x4d691f===_0x353a62)break;else _0x1630a4['push'](_0x1630a4['shift']());}catch(_0xaee821){_0x1630a4['push'](_0x1630a4['shift']());}}}(_0x49d1,0x542af),console[_0x1c49f2(0x10f)]('%cDeveloped\x20By\x20Lucky\x20Chauhan\x20(Alpha)',_0x1c49f2(0x114)),console[_0x1c49f2(0x10f)](_0x1c49f2(0x108),_0x1c49f2(0x111)),console[_0x1c49f2(0x10f)](_0x1c49f2(0x10a),_0x1c49f2(0x111)));