'use strict';

const body = document.querySelector('body');
const hero = document.querySelector('.hero');

const observeLogo = function () {};

const observeGallery = function () {
  const options = {
    rootMargin: '-200px',
  };

  const observeCallback = function (entries, observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        body.classList.add('white');
      } else {
        body.classList.remove('white');
      }
    });
  };
  const observer = new IntersectionObserver(observeCallback, options);

  const target = document.querySelector('.gallery-2');
  observer.observe(target);
};

const observeImages = function () {
  const options = {
    rootMargin: '-50px',
  };

  const observeCallback = function (entries, observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        target.classList.add('gallery__img--visible');
        observer.unobserve(target);
      }
    });
  };
  const observer = new IntersectionObserver(observeCallback, options);

  const targets = document.querySelectorAll('.gallery__img');
  targets.forEach((target) => {
    observer.observe(target);
  });
};

const lazyLoad = function () {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 500px 0px' }
    );
    document.querySelectorAll('img').forEach((img) => {
      observer.observe(img);
    });
  }
};

const show = function () {
  const header = document.querySelector('.header');
  const loader = document.querySelector('.preloader');
  loader.style.display = 'none';
  setTimeout(() => {
    hero.classList.add('active');
  }, 500);
  setTimeout(() => {
    header.classList.add('active');
  }, 1000);
};

const init = function () {
  show();
  observeLogo();
  observeGallery();
  observeImages();
  lazyLoad();
};

document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    init();
  }
};
