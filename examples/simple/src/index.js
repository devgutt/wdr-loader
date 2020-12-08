const wdrLoader = require("wdr-loader");

wdrLoader(data=> {
    render(data);
})

function render(data) {

    document.head.innerHTML = `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${data.title}</title>
    `;

    document.body.innerHTML = `
        <section>
            <h1>${data.title}</h1>
            <p>${data.description}<p>
        </section>`;
}

