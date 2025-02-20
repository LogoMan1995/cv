const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtnIcon.classList.toggle("fa-bars");
  menuBtnIcon.classList.toggle("fa-times");
});






const scrollRevealOption = {
    distance: "50px",  
    origin: "bottom",  
    duration: 1000,     
  };
  

  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  

  function revealElement(element, index, options) {
    if (isElementInView(element)) {
      element.style.transition = `transform ${options.duration}ms, opacity ${options.duration}ms`;
      element.style.transitionDelay = `${index * 0.5}s`;
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
      element.classList.add("revealed");
    }
  }
  
  
  const observerOptions = {
    root: null,         
    rootMargin: "0px",  
    threshold: 0.1     
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && !entry.target.classList.contains("revealed")) {
        entry.target.classList.add("revealed");
        // Добавляем плавную анимацию для элемента
        entry.target.style.transition = `transform ${scrollRevealOption.duration}ms, opacity ${scrollRevealOption.duration}ms`;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);
  

  const elementsToReveal = document.querySelectorAll(
    ".header__image img, .header__content h2, .header__content h1, .header__content h3, .header__content p, .header__btns, .intro__image, .intro__content .section__subheader, .intro__content .section__header, .intro__description, .intro__grid, .intro__content h4, .intro__flex div, .journey__grid > div > div"
  );
  
  elementsToReveal.forEach((element) => {
    observer.observe(element);
  });
  
  window.addEventListener("load", () => {
    elementsToReveal.forEach((element, index) => {
      revealElement(element, index, scrollRevealOption);
    });
  });
  




  const downloadButton = document.getElementById('download');

  downloadButton.addEventListener('click', () => {
      const fileUrl = 'david grigorian.pdf'; // Путь к файлу
      const link = document.createElement('a'); 
      link.href = fileUrl;
      link.download = 'David Grigorian.pdf';  // Имя файла при скачивании
      link.click();
  });
  