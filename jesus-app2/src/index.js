/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { register_image } from './lazy_load' 

const images_container = document.querySelector('.images_container');
const img_builder = document.querySelector('.img_builder');
const delete_img = document.querySelector('.delete_img');

const randon_num2 = () => {
    const max_num = 122;
    const min_num = 1;
    return Math.floor(Math.random() * (max_num - min_num)) + min_num;
};

const img_maker = () => {
    const image_container = document.createElement('div');
    image_container.className = 'p-4'
    const img = document.createElement('img');
    img.className = 'mx-auto';
    img.width = '320';
    img.alt = 'un zorrito jugando'
    img.dataset.src = `https://randomfox.ca/images/${randon_num2()}.jpg`;
    image_container.append(img);
    return image_container
}

img_builder.addEventListener('click', add_img);

function add_img(){
    let new_img = img_maker();
    images_container.append(new_img);
    register_image(new_img)
}

delete_img.addEventListener('click', image_deleter)

function image_deleter() {
    images_container.removeChild(images_container.lastChild)
}





