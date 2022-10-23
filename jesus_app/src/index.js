/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const base_url = 'https://platzi-avo.vercel.app'

const app_node = document.querySelector('#app');

window
.fetch(`${base_url}/api/avo` )
.then((respuesta) => respuesta.json())
.then((respuesta_json) => {
    const all_items = [];

    respuesta_json.data.forEach(item => {
        // console.log(item.name)

        const img = document.createElement('img');
        img.src = `${base_url}${item.image}`;

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = item.price;

        const container = document.createElement('div')

        container.append(img, title, price);

        all_items.push(container)
    });
    app_node.append(...all_items)
})

