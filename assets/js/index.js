function createPortfolioWork(object) {
    const name = object["name"];
    const post = object["post"];
    const time = object["time"];
    let startTitle = "";
    let endTitle = "";
    if ("url" in object) {
        startTitle = `<a href="${object["url"]}">`;
        endTitle = `</a>`;
    }
    const imagePath = `./assets/image/work/${object["asset"]}`;
    const description = object["description"].replaceAll("\n", "<br/>");
    return `
    <div class="work">
        ${startTitle}
        <div class="title">
            <img alt="" src="${imagePath}"/>
            <div class="text">
                <span class="name">${name}</span>
                <span class="post">${post}</span>
            </div>
        </div>
        ${endTitle}
        <span class="time">${time}</span>
        <p class="description">${description}</p>
    </div>`;
}

const portfolio = document.getElementById("portfolio");
fetch('./assets/json/portfolio.json')
    .then((data) => data.json())
    .then((json) => {
        for (let jsonElement of json) {
            portfolio.innerHTML += createPortfolioWork(jsonElement);
        }
    })
