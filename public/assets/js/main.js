// Loading animation
const loading = document.querySelector(".loading");
window.addEventListener("load", function () {
  loading.classList.add("active");
});

//Product quantity
var incrementBtn = document.getElementsByClassName("inc__btn");
var decrementBtn = document.getElementsByClassName("dec__btn");

for (var i = 0; i < incrementBtn.length; i++) {
  var button = incrementBtn[i];
  button.addEventListener("click", function (e) {
    var buttonClicked = e.target;
    var input = buttonClicked.parentElement.children[2];
    var newValue = parseInt(input.value) + 1;
    input.value = newValue;
  });
}

for (var i = 0; i < decrementBtn.length; i++) {
  var button = decrementBtn[i];
  button.addEventListener("click", function (e) {
    var buttonClicked = e.target;
    var input = buttonClicked.parentElement.children[2];
    var newValue = parseInt(input.value) - 1;
    if (newValue >= 1) {
      input.value = newValue;
    } else {
      input.value = 1;
    }
  });
}
