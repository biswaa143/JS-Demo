const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", function (event) {
  console.log("Parent clicked.");
});

child.addEventListener("click", function (event) {
  event.stopPropagation(); // Stop the event from propagating to the parent
  console.log("Child clicked, but event propagation stopped.");
});
