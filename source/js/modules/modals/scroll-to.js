// https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
};

const intoButton = document.querySelector('.intro__button');
const products = document.querySelector('.products');

const scrollToProducts = () => {
  if (!products) {
    intoButton.style.display = 'none';
  } else {
    intoButton.addEventListener('click', () => {
      scrollTo(products);
      // products.scrollIntoView();
    });
  }
};

export {scrollToProducts};
