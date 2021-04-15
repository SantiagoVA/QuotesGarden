import cards from "../DOM/components/card.js";
import notFound from "../DOM/components/notFound.js";
import searchAll from "./searchAll.js";

export default async function quotesSearch(
    typeSearch,
    valueSearch,
    limit = 12
) {
    try {
        if (typeSearch === "all") {
            const allCategories = await searchAll(valueSearch, limit);
            return allCategories;
        } else {
            const search = await fetch(
                `https://quote-garden.herokuapp.com/api/v3/quotes?${typeSearch}=${valueSearch}&count=${limit}&limit=${limit}`
            );
            const data = (await search.json()).data;
            console.log(data.length);
            const dataHTML = cards(data, valueSearch);
            console.log(
                `https://quote-garden.herokuapp.com/api/v3/quotes?${typeSearch}=${valueSearch}&count=${limit}&limit=${limit}`
            );
            return dataHTML;
        }
    } catch (err) {
        console.log(err);
        return notFound();
    }
}