export default function card(data) {
    let cardHTML = '';
    for (const element in data) {
        const topicStr = data[element].quoteGenre.charAt(0).toUpperCase() + data[element].quoteGenre.slice(1);

        cardHTML += `
      <div class="card-quotes">
        <p class="topic">${topicStr}</p>
        <p class="quote">${data[element].quoteText}</p>
      </div>
    `
    }

    return cardHTML;

}