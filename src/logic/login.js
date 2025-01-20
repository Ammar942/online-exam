$("#signup").on("click", () => {
  console.log("click");
  sliding.classList.remove("translate-x-0");
  sliding.classList.add("translate-x-full");
});

$("#login").on("click", () => {
  console.log("click");
  sliding.classList.remove("translate-x-full");
  sliding.classList.add("translate-x-0");
});
