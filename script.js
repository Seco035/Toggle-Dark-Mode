
// javascript
// document.querySelectorAll("#toggle").forEach(toggle => {
//     toggle.addEventListener("click", function() {
//         const checkbox = this.previousElementSibling;
//         checkbox.checked = !checkbox.checked;
//     });
//   });
// document.getElementById("darkModeCheckbox").addEventListener("click", function() {
//   const toggle = this.nextElementSibling;
//   if (this.checked) {
//     toggle.style.backgroundColor = "#ebebeb";
//     toggle.innerHTML = '<i class="bi bi-cloud-sun-fill"></i>';
//       document.body.style.backgroundColor="#ccc";
//     } else {
//       toggle.style.backgroundColor = "#242424";
//       toggle.innerHTML = '<i class="bi bi-cloud-moon-fill"></i>';
//       document.body.style.backgroundColor="#242424";

//     }
//   });
  
const toggle = document.getElementById("toggle");

document.getElementById("darkModeCheckbox").addEventListener("click", function() {
  const checkbox = this;
  if (checkbox.checked) {
    toggle.style.backgroundColor = "#ebebeb";
    toggle.innerHTML = '<i class="bi bi-cloud-sun-fill"></i>';
    document.body.style.transition = "background-color 0.5s";
    document.body.style.backgroundColor = "#fff";
  } else {
    toggle.style.backgroundColor = "#242424";
    toggle.innerHTML = '<i class="bi bi-cloud-moon-fill"></i>';
    document.body.style.transition = "background-color 0.5s";
    document.body.style.backgroundColor = "#313131";
  }
});