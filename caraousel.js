const scrollContainers = document.querySelectorAll(".facility-scroll");
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