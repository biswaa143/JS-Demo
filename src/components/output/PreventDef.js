const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action (navigating to the URL)
  console.log("Link clicked, but default behavior prevented.");
});
