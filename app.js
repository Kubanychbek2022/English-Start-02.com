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
        <h1 class="menu-title">${word.word}</h1>
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

 