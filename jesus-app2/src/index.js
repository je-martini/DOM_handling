/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const images_container = document.querySelector('.images_container');

const max_num = 122;
const min_num = 1;
const randon_num2 = () => {
    return Math.floor(Math.random() * (max_num - min_num)) + min_num;
};

const img_maker = () => {
    const image_container = document.createElement('div');
    image_container.className = 'p-4'
    const img = document.createElement('img');
    img.className = 'mx-auto';
    img.width = '320';
    img.alt = 'un zorrito jugando'
    img.src = `https://randomfox.ca/images/${randon_num2()}.jpg`;
    image_container.append(img);
    return image_container
}

images_container.append(
    img_maker(),
    img_maker(),
    img_maker(),
    img_maker()
    )




