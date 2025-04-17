function swapImages() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  // Swap z-index and transform
  if (img1.classList.contains("front")) {
    img1.classList.remove("front");
    img2.classList.add("front");
  } else {
    img2.classList.remove("front");
    img1.classList.add("front");
  }
}

function handleLearnMore() {
  window.open("https://youtu.be/FQgYyLKP6y4?si=LOEMqis_p9T-Q4ZT", "_blank");
}

document.querySelectorAll(".footer-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function scrollToSection() {
  document.querySelector("#tentang-kami").scrollIntoView({ behavior: "smooth" });
}
