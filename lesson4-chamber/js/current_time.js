let d = new Date();
document.querySelector('#LastMod1').innerHTML = document.lastModified;
document.querySelector('#LastMod2').innerHTML = document.lastModified;
document.querySelector('#LastMod3').innerHTML = document.lastModified;

document.querySelector('#year1').textContent = d.getFullYear();
document.querySelector('#year2').textContent = d.getFullYear();
document.querySelector('#year3').textContent = d.getFullYear();



const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	d);
datefield.innerHTML = fulldate;

document.querySelector("#ham").onclick = () => {
  document.querySelector(".navigation").classList.toggle('show');
  }