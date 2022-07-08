var x = document.getElementById("modal");
function showModal() {
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
document.getElementsByClassName("modalbutton")[0].addEventListener("click", showModal)
document.getElementsByClassName("modalbutton")[1].addEventListener("click", showModal)
// console.log(document.getElementsByClassName("modalbutton")[0])
// console.log(typeof document.getElementsByClassName("modalbutton"))