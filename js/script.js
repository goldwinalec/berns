const observeGallery = function () {
  const options = {
    rootMargin: '-50%',
    threshold: [0, 0],
  };

  const trueCallback = function (entries, observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        entry.target.classList.add('gallery-2--active');
      } else {
        entry.target.classList.remove('gallery-2--active');
      }
    });
  };
  const observer = new IntersectionObserver(trueCallback, options);

  const target = document.querySelector('.gallery-2');
  observer.observe(target);
};

const observeImages = function () {
  const options = {
    rootMargin: '10%',
    threshold: 0.1,
  };

  const trueCallback = function (entries, observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        entry.target.classList.remove('gallery__img--hidden');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(trueCallback, options);

  const targets = document.querySelectorAll('.gallery__img');
  targets.forEach((target) => {
    observer.observe(target);
  });
};

observeGallery();
observeImages();
