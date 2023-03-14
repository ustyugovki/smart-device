const fullText = document.querySelector('.about__text--fulltext');
const aboutButton = document.querySelector('.about__button');

const aboutShow = () => {
  if (fullText) {
    aboutButton.addEventListener('click', () => {
      if (fullText.classList.contains('is-hidden')) {
        fullText.classList.remove('is-hidden');
        aboutButton.textContent = 'Свернуть';
      } else {
        fullText.classList.add('is-hidden');
        aboutButton.textContent = 'Подробнее';
      }
    });
  } else {
    aboutButton.style.display = 'none';
  }
};

export {aboutShow};
