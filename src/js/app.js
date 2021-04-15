import quoteSearch from "./callAPI/quote.js";
import randomSearch from "./callAPI/random.js";
import notFound from "./DOM/components/notFound.js";

const form = document.getElementById("form");
const formOptions = document.getElementById("form-options");
const input = document.getElementById("input");
const randomBtn = document.getElementById("random");
const resultsContainer = document.getElementById("results");
const selectSearch = document.getElementById("select-search");
const selectLimit = document.getElementById("select-limit");

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    try {
        resultsContainer.innerHTML = `<img class="loading" src="./src/img/loading.svg">`;
        const dataHTML = await quoteSearch(
            selectSearch.value,
            input.value,
            selectLimit.value
        );

        if (dataHTML && dataHTML.length > 0) {
            resultsContainer.innerHTML = `<h1>${input.value.charAt(0).toUpperCase() + input.value.slice(1)}</h1>  ${dataHTML}`;
        } else {
            const err = notFound();
            resultsContainer.innerHTML = err;
        }
    } catch {
        const err = notFound();
        resultsContainer.innerHTML = err;
    }
});

randomBtn.addEventListener("click", async() => {
    try {
        resultsContainer.innerHTML = `<img class="loading" src="./src/img/loading.svg">`;
        const dataHTML = await randomSearch(selectLimit.value);
        resultsContainer.innerHTML = `<h1>Random Search</h1>  ${dataHTML}`;
    } catch {
        const err = notFound();
        resultsContainer.innerHTML = err;
    }
});