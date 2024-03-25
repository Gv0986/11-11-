const febHolidays = [
    "Soo my cute little girlfriend 😚 ya meri cutie pie 💖 bolu",

 "... it's 11:11 and i want  to make a Wish...",

"Ek duwa pe atak gaya hai aab yeh dil vineeta ji ",

"Apke siwa aab kuch manga nahi jata",

"Malum uper wale ne mujhe bheja duniya dekhne ko", 

"Aur mai apka  chahera dekh k vahi ruk gaya ",

"Yrr like kiti kiti 😚 beautiful aahet tumhi", 

"Apko dekh k bus pyar karne ka mun karta hai",

"Mun karta hai bus apko aise he pakde rakhu jor se ",

"Yrr yeh messages likhte time i feel so love 😘",

" ek smile raheti hai pure time face pe ",

"Aapko pata hai vineeta ji aap kya ho mere liye ",

"Subah ka pehla khayaal ho tum",

"Meri raat ki aakhri yaad ho tum",

"Kabhi meethi pavan si tum",

"To kabhi meethi barsaat ho tum",

"Aankhen bandh hote hi chehre pr aati muskan ho tum",

"To kabhi behne vale nam aansu ho tum",

"Mere jeevan ki ardaas ho tum",

"Mere dil ki pyaas ho tum",

"Zindagi jeene ki ek hi aas ho tum",

"Mere vichaaron me rehti har waqt ho tum",

"Pal pal mujhe yaad aati baat ho tum",

"Guroor bhi tum mera swabhimaan bhi tum",

"Jhuke sar jiske aage wo shiv bhi tum",

"Meri jaan bhi tum mera samaan bhi tum",

"Me tumhara hi tha hu aur rahunga ye jaan lo tum",

"I just love you the most 😚😚 my cutie pie my teddy 🧸",

"You know my darling",

" you will never be unloved by me ",

"you are too well tangled in my soul",

"At last bus itna he mere ho aap thode se or mere bun jaao 💕"

  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
