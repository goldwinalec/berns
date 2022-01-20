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
    rootMargin: '100px',
  };

  const trueCallback = function (entries, observer) {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        target.classList.add('gallery__img--visible');
        observer.unobserve(target);
      }
    });
  };
  const observer = new IntersectionObserver(trueCallback, options);

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
      { rootMargin: '0px 0px 300px 0px' }
    );
    document.querySelectorAll('img').forEach((img) => {
      observer.observe(img);
    });
  }
};

observeGallery();
observeImages();

lazyLoad();
