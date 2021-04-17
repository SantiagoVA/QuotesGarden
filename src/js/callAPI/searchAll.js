import cards from "../DOM/components/card.js";

export default async function searchAll(valueSearch, limit) {
    const limitDivided = parseInt(parseInt(limit) / 3);
    let dataHTML = '';
    const kindOfSearch = ['query', 'author', 'genre'];

    for (let element of kindOfSearch) {
        console.log(element)
        const search = await fetch(
            `https://quote-garden.herokuapp.com/api/v3/quotes?${element}=${valueSearch}&count=${limitDivided}&limit=${limitDivided}`
        );
        const data = (await search.json()).data;
        const htmlElement = cards(data, valueSearch);
        dataHTML += htmlElement;
    }

    return dataHTML;
}