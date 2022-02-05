let d = new Date();
document.querySelector('#LastMod').innerHTML = `${document.lastModified}`;


document.querySelector('#year').textContent = d.getFullYear();
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	d);
datefield.innerHTML = fulldate;

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}