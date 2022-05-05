window.addEventListener('load', (event) => {


    const header = document.querySelector('.js-header');
    const preview = document.querySelector('.js-preview');

    preview.style.paddingTop = `${header.getBoundingClientRect().height}px`;
    preview.style.marginTop = `-${header.getBoundingClientRect().height}px`;
});