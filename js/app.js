/* Creating a frigment. */
const container = document.createDocumentFragment();
/* Selecting the sections. */
const sections = document.querySelectorAll('section');
/* Converting an array-like structure to an array. */
const sectionsArray = Array.from(sections);
/* Selecting the <ul> element. */
const navList = document.getElementById('navbar__list');

/* Creating new <li> elements and adding them to the fregment. */
function listProducer() {
  for (const element of sectionsArray) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${element.id}">Section ${sectionsArray.indexOf(element)+1}</a>`;
    container.appendChild(listItem);
  } 
}
/* Calling the function. */
listProducer();

/* Adding the fregment to the <ul> element. */
navList.appendChild(container);

/* Smoothly scroll to the clicked section */
const alink = document.querySelectorAll('a[href^="#"]');
function smoothee(event) {
  event.preventDefault();
  const asec = document.querySelector(this.getAttribute('href'));
  asec.scrollIntoView({behavior: "smooth", block: "end"});
}
alink.forEach(anc => anc.addEventListener('click', smoothee));

/* Highlightong section on the view. */
function highlighting() {
  for (const sec of sectionsArray) {
    let y = sec.getBoundingClientRect().top;
    /* Selecting an element using one of its attributes' value */
    const seli = document.querySelector(`[href="#${sec.id}"]`);
    /* Checking the position of the section */
    if (y > -300 && y < 275) {
      sec.classList.add('your-active-class');
      seli.classList.add('navSelected');
    } else {
      sec.classList.remove('your-active-class');
      seli.classList.remove('navSelected');
    }
  }
}

/* Adding an event litener to the document tolisten for scrolling */
document.addEventListener('scroll', highlighting);