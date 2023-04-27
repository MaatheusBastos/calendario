const calendar = document.querySelector(".calendar");
const dates = document.querySelectorAll(".dates ul li span");

for(let date of dates)  {
  date.addEventListener("click", function() {
    date.classList.toggle("ativa");
  })
}

const months = document.querySelector(".months")
const monthList = document.querySelectorAll(".month ul li span")
const icon = document.querySelector(".ph-caret-down");
const x = document.querySelector(".x");

icon.addEventListener("click", function() {
  months.classList.remove("invisible");
  x.classList.remove("invisible");
  calendar.classList.add("invisible");
})

for(let month of monthList) {
  month.addEventListener("click", function(){
    month.classList.toggle("ativa");
  })
}

x.addEventListener("click", function() {
  months.classList.add("invisible");
  x.classList.add("invisible");
  calendar.classList.remove("invisible");
})