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

observeGallery();
