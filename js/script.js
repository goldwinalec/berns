'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');
const openVideoBtns = document.querySelectorAll('.hero__play-btn');

const playVideo = function () {
  openVideoBtns.forEach((btn) =>
    btn.addEventListener('click', function () {
      const video = `<div class="video__wrapper">
    <video src="/videos/video.mp4" class="video" preload="none" poster="/images/content/poster.jpg" controls autoplay></video>
    <div class="overlay"><div>
    </div>`;
      body.insertAdjacentHTML('afterbegin', video);
      html.classList.add('disable');
      const overlay = document.querySelector('.overlay');
      const wrapper = document.querySelector('.video__wrapper');
      overlay.addEventListener('click', function () {
        html.classList.remove('disable');
        wrapper.remove();
      });
    })
  );
};

const observeLogo = function () {
  window.addEventListener('scroll', function () {
    const logo = document.querySelector('.hero__logo');
    logo.style.transform = `translateY(-${scrollY * 0.5}px)`;
  });
};

const observeGallery = function () {
  const options = {
    rootMargin: '-100px',
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
    rootMargin: '50px',
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

const observeText = function () {
  const options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.1,
  };

  const observeCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
  const observer = new IntersectionObserver(observeCallback, options);

  const targets = document.querySelectorAll('.text__wrapper');
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

const showContent = function () {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const loader = document.querySelector('.preloader');
  const main = document.querySelector('.main');
  setTimeout(() => {
    loader.style.display = 'none';
    hero.classList.add('active');
    main.classList.add('active');
  }, 500);
  setTimeout(() => {
    header.classList.add('active');
  }, 1000);
};

const init = function () {
  showContent();
  observeLogo();
  observeGallery();
  observeImages();
  observeText();
  lazyLoad();
  playVideo();
};

document.querySelectorAll('a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.onload = function () {
  init();
};
