document.getElementById("mobile-menu").onclick = function () {
  document.getElementsByClassName("menu")[0].classList.toggle("open");

  if (document.getElementsByClassName("menu")[0].classList.contains("open")) {
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "";
    closeButton.classList.add("close-button");

    closeButton.onclick = function () {
      document.getElementsByClassName("menu")[0].classList.remove("open");
      this.remove();
    };

    document.getElementsByClassName("menu")[0].appendChild(closeButton);
  } else {
    document.querySelector(".close-button").remove();
  }
};

document.querySelectorAll(".menu ul li a").forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementsByClassName("menu")[0].classList.remove("open");
    if (document.querySelector(".close-button")) {
      document.querySelector(".close-button").remove();
    }
  });
});
