'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');

const observeLogo = function () {
  window.addEventListener('scroll', function () {
    const logo = document.querySelector('.hero__logo');
    logo.style.transform = `translateY(-${scrollY * 0.5}px)`;
  });
};

const observeGallerySection = function () {
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
      } else {
        target.classList.remove('gallery__img--visible');
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
    rootMargin: '-50px',
    threshold: 0,
  };

  const observeCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
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

const playVideo = function () {
  const openVideoBtn = document.querySelector('.hero__play-btn');
  const openVideo2Btn = document.querySelector('.gallery-1__video-btn');
  openVideoBtn.addEventListener('click', function () {
    const video = `<div class="video__wrapper">
    <video src="/videos/video.mp4" class="video" preload="none" controls autoplay></video>
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
  });
  openVideo2Btn.addEventListener('click', function () {
    const video = `<div class="video__wrapper">
    <video src="/videos/video-2.mp4" class="video" preload="none" poster="/images/content/poster.jpg" controls autoplay></video>
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
  });
};

const openGallery = function () {
  const imageBtns = document.querySelectorAll('.gallery__img');
  imageBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const gallery = `<div class="gallery__wrapper wrapper">
  <div class="swiper-wrapper">
    <img
      src="/images/content/gallery-img-1.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-2.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-3.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-4.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-5.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-6.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-7.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-8.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-9.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-10.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-11.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-12.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-13.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-14.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-15.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-16.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    /><img
      src="/images/content/gallery-img-17.jpg"
      alt=""
      class="wrapper__img swiper-slide"
    />
  </div>
  <div class="swiper-scrollbar"></div>
  <div class="wrapper__close btn"></div>
</div>
`;
      customCursor();
      body.insertAdjacentHTML('afterbegin', gallery);
      html.classList.add('disable');
      const closeBtn = document.querySelector('.wrapper__close');
      const wrapper = document.querySelector('.gallery__wrapper');
      const generateColor = function () {
        const colors = [
          '140624',
          '130D0D',
          '091A20',
          '1C0813',
          '02161C',
          '04071A',
        ];
        return `#${colors[Math.floor(Math.random() * colors.length)]}`;
      };
      const observeBackgound = function () {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0,
        };

        const observeCallback = function (entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              wrapper.style.background = generateColor();
            }
          });
        };
        const observer = new IntersectionObserver(observeCallback, options);

        const targets = document.querySelectorAll('.wrapper__img');
        targets.forEach((target) => {
          observer.observe(target);
        });
      };
      observeBackgound();
      const swiperGallery = new Swiper('.gallery__wrapper', {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: {
          releaseOnEdges: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      });
      closeBtn.addEventListener('click', function () {
        html.classList.remove('disable');
        wrapper.remove();
      });
    });
  });
};

const showContent = function () {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const loader = document.querySelector('.preloader');
  const main = document.querySelector('.main');
  lazyLoad();
  setTimeout(() => {
    loader.style.display = 'none';
    hero.classList.add('active');
    main.classList.add('active');
    observeLogo();
    observeGallerySection();
    observeImages();
    observeText();
  }, 500);
  setTimeout(() => {
    header.classList.add('active');
  }, 1000);
};

const init = function () {
  showContent();
  playVideo();
  openGallery();
};

const customCursor = function () {
  const images = document.querySelectorAll('.gallery__img');
  const links = document.querySelectorAll('a');
  const buttons = document.querySelectorAll('.btn');
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');

  const movingCursor = (e) => {
    cursor.setAttribute(
      'style',
      `top: ${e.clientY}px; left: ${e.clientX}px; display: block;`
    );
    cursorFollower.setAttribute(
      'style',
      `top: ${e.clientY}px; left: ${e.clientX}px; display: block;`
    );
  };
  document.addEventListener('mousemove', movingCursor);
  document.addEventListener('touchmove', function () {
    cursor.setAttribute('style', `display: none;`);
    cursorFollower.setAttribute('style', `display: none;`);
  });
  const elements = [...images, ...links, ...buttons];
  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      cursor.classList.add('cursor--active');
      cursorFollower.classList.add('cursor--active');
    });
    element.addEventListener('mouseout', () => {
      cursor.classList.remove('cursor--active');
      cursorFollower.classList.remove('cursor--active');
    });
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.onload = function () {
  init();
};

customCursor();
