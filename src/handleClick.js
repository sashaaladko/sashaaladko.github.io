document.addEventListener("DOMContentLoaded", () => {
  const panelItems = document.querySelectorAll(".panel-item");
  const continueButton = document.querySelector(".main-btn");
  let selectedLink = "https://apple.com";

  panelItems.forEach((item) => {
    item.addEventListener("click", () => {
      panelItems.forEach((panel) => panel.classList.remove("active-panel"));
      item.classList.add("active-panel");
      selectedLink = item.getAttribute("data-link");
    });
  });

  continueButton.addEventListener("click", () => {
      window.location.href = selectedLink;
  });
});
