import cards from "../DOM/components/card.js";

async function searchByQuote(valueSearch, limit) {
    const search = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?query=${valueSearch}&count=${limit}&limit=${limit}`
    );
    const data = (await search.json()).data;
    const dataHTML = cards(data, valueSearch);
    return dataHTML;
}

async function searchByAuthor(valueSearch, limit) {
    const search = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${valueSearch}&count=${limit}&limit=${limit}`
    );
    const data = (await search.json()).data;
    const dataHTML = cards(data, valueSearch);
    return dataHTML;
}

async function searchByTopic(valueSearch, limit) {
    const search = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?genre=${valueSearch}&count=${limit}&limit=${limit}`
    );
    const data = (await search.json()).data;
    const dataHTML = cards(data, valueSearch);
    return dataHTML;
}

export default async function searchAll(valueSearch, limit) {
    const limitDivided = parseInt(parseInt(limit) / 3);
    const quote = await searchByQuote(valueSearch, limitDivided);
    const author = await searchByAuthor(valueSearch, limitDivided);
    const topic = await searchByTopic(valueSearch, limitDivided);

    return `${quote + author + topic}`;
}