document.addEventListener("DOMContentLoaded", () => {
  let selectedColor = null;

  const colorChoices = document.querySelectorAll(".color-choice");
  const colorBoxes = document.querySelectorAll(".box__text");

  colorChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      selectedColor = choice.getAttribute("data-color");
      colorChoices.forEach((c) => c.classList.remove("selected"));
      choice.classList.add("selected");
    });
  });

  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (selectedColor) {
        box.style.backgroundColor = selectedColor;
      }
    });
  });
});
