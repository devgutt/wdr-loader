const wdrLoader = require("wdr-loader");

wdrLoader(data=> {
    render(data);
})

function render(data) {

    document.title = 'WDR-loader example';

    const html = document.getElementsByTagName('html')[0];
    html.innerHTML = `
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${data.title}</title>
        <style>
        .main {
            background-color: aliceblue;
            text-align: center;
            padding: 16px;
        }
        </style>
    </head>
    <body>
        <section class="main">
            <div>
                <h1>${data.title}</h1>
                <p>${data.description}<p>
            </div>
        </section>
    </body>
    </html>
    `;

}
