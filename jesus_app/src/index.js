/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo'

window
.fetch(url)
.then((respuesta) => respuesta.json())
.then((respuesta_json) => {
    const all_items = [];

    respuesta_json.data.forEach(item => {
        // console.log(item.name)

        const img = document.createElement('img');
        
        const title = document.createElement('h2');
        
        const price = document.createElement('p');
        
        const container = document.createElement('div')

        container.append(img, title, price);

        all_items.push(container)
    });
    document.body.append(...all_items)
})

