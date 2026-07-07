document.querySelectorAll(".rail button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".rail button").forEach((item) => {
      item.style.borderColor = "rgba(239, 246, 255, 0.12)";
    });
    button.style.borderColor = "#d7ff67";
  });
});
