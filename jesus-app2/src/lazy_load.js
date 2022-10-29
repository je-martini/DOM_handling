const is_intersecting = (entry) => {
     return entry.isIntersecting
}

const load_img = (entry) => {
    let container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url; 
    // console.log(node.nodeName);

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(is_intersecting)
    .forEach(load_img)
})

export const register_image = (imagen) => {
    observer.observe(imagen)
}