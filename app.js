const srcollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
srcollContainer.addEventListener("wheel", function (evt) {
  evt.preventDefault();
  srcollContainer.scrollLeft += evt.deltaY;
  srcollContainer.style.scrollBehavior = "smooth";
  console.log(`srcollContainer.scrollLeft: ${srcollContainer.scrollLeft}`);
  console.log(`evt.deltaY: ${evt.deltaY}`);
});
nextBtn.addEventListener("click", () => {
  srcollContainer.style.scrollBehavior = "smooth";
  srcollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
  srcollContainer.style.scrollBehavior = "smooth";
  srcollContainer.scrollLeft -= 900;
});
