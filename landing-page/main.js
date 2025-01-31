// search menu
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navContainer = document.querySelector(".nav-container"); // Menambahkan selektor untuk nav-container

  burger.addEventListener("click", function () {
    // Toggle 'active' class pada burger
    this.classList.toggle("active");

    // Toggle 'active' class pada nav-container
    navContainer.classList.toggle("active");
  });
});



const guestInput = document.getElementById("guest");

guestInput.addEventListener("keypress", (e) => {
  if (!/^\d$/.test(e.key)) {
    e.preventDefault();
  }
});

guestInput.addEventListener("input", () => {
  guestInput.value = guestInput.value.replace(/[^\d]/g, "");
});


// Bookmark destination card
  const bookmarkIcons = document.querySelectorAll('.bx-bookmark, .bxs-bookmark');

  bookmarkIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      if (icon.classList.contains('bx-bookmark')) {
        icon.classList.replace('bx-bookmark', 'bxs-bookmark');
        icon.classList.add('active');
      } else {
        icon.classList.replace('bxs-bookmark', 'bx-bookmark');
        icon.classList.remove('active');
      }
    });
  });

  // Caraousel prev & next
  const scrollContainers = document.querySelectorAll(".card-scroll, .destination-scroll, .promo-scroll");
  const scrollStep = 240;
  
  scrollContainers.forEach((scrollContainer) => {
    const prevButton = scrollContainer.parentElement.querySelector(".scroll-button.prev");
    const nextButton = scrollContainer.parentElement.querySelector(".scroll-button.next");
  
    prevButton.addEventListener("click", () => {
      scrollContainer.scrollLeft -= scrollStep;
    });
  
    nextButton.addEventListener("click", () => {
      scrollContainer.scrollLeft += scrollStep;
    });
  
    scrollContainer.addEventListener("scroll", () => {
      prevButton.disabled = scrollContainer.scrollLeft === 0;
      nextButton.disabled =
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth;
    });
  
    prevButton.disabled = scrollContainer.scrollLeft === 0;
    nextButton.disabled =
      scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth;
  });

  // sponsored grid
  document.querySelector('.next-partner').addEventListener('click', function() {
    const grids = document.querySelectorAll('.partners-grid, .partners-grid-2, .partners-grid-3');
    const chevron = document.querySelector('.next-partner i');
    let visibleCount = 0;
  
    grids.forEach(grid => {
      if (grid.style.display === 'flex') {
        visibleCount++;
      }
    });
  
    if (visibleCount === 0) {
      grids[0].style.display = 'flex';
    } else if (visibleCount === 1) {
      grids[1].style.display = 'flex';
    } else if (visibleCount === 2) {
      grids[2].style.display = 'flex';
      chevron.style.transform = 'rotate(180deg)';
    } else {
      grids.forEach(grid => grid.style.display = 'none');
      chevron.style.transform = 'rotate(0deg)';
    }
  });