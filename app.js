window.addEventListener("load", getWords);

  function getWords () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "words.json");

  xhr.onload = function () {
   
    if (this.status === 200) {
      const words = JSON.parse(this.responseText);
     
      const sortedWords = words.sort((a, b) => {
        if(a.word > b.word) {
          return 1;
        } else if(a.word < b.word) {
            return -1;
        }
      })
      sortedWords.map((word) => {
        const menu = document.querySelector(".menu");
        const li = document.createElement("li");
         li.classList.add("menu-item");
         li.innerHTML = `
        <div class="pronounce">
        <a href=${word.pronounceLink} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24"><path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/></svg></a>
        </div>
        <h2 class="menu-title">${word.word}</h2>
        <h3 class="menu-text">${word.translate}</h3>
        `
        menu.appendChild(li);
      })
      
    }
    const menuTitle = document.querySelectorAll(".menu-title");
     menuTitle.forEach((menu) => {
      menu.addEventListener("click", function () {
        this.classList.toggle("minus-icon");
        this.classList.toggle("menu-title--underline")
        this.nextElementSibling.classList.toggle("menu-text--show");
      })
     })
  }
  
xhr.send();
 }

 setTimeout(()=> {
  document.querySelector(".present-window").remove();

 }, 6000);


 function greetForTime () {

  const getDate = new Date();
const getHour = getDate.getHours();

const showTime = document.querySelector(".show-time");

  if (getHour>=04 && getHour<=11) {
    showTime.innerText = "Good morning";
  } else if (getHour>=11 && getHour<=15) {
    showTime.innerText = "Good afternoon";
  } else if (getHour>= 15 && getHour<=23) {
    showTime.innerText = "Good evening";
  } else {
    showTime.innerText = "Good night";
  }
}

greetForTime();


const getDate = new Date();
const footer = document.querySelector(".footer__title");
footer.append(getDate.getFullYear());