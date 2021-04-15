import cards from '../DOM/components/card.js';

export default async function random(limit) {
    const search = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random?count=${limit}&limit=${limit}`)
    const data = (await search.json()).data
    const dataHTML = cards(data);
    return dataHTML;
}