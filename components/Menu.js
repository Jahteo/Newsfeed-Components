// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// const header = document.querySelector(".header")
// function menuMaker(menuArray) {
//   // debugger
//   const menu = document.createElement("div")
//   menu.classList.add("menu")
//   const unordList = document.createElement("ul")
//   menu.appendChild(unordList)
//   menuArray.map((i) => {
//     const menuItem = document.createElement("li")
//     menuItem.textContent = i
//     unordList.appendChild(menuItem)
//     return menuItem
//   })
//   const menuButton = document.querySelector(".menu-button")
//   menuButton.addEventListener("click", () => {
//     menu.classList.toggle("menu--open")
//   })
//   return menu
// }

// const theMenu = menuMaker(menuItems)
// header.appendChild(theMenu)


//blatantly stolen from https://codepen.io/Callum-Martin/pen/eGOzyN for my first animation!!!
//I understand most of why it works enough to rewrite my js to match, but I did admittely copy/paste directly into CSS & then wrestle the JS to fit bc it's so complicated/pretty.
//I'm pretty sure i did the class cconverstions, and adjusted menuMaker() correctly. I'm not sure where to put the new code from (declating the variables burgerSidebar - sideText) & the timeline. The .to's in the timeline may also nead they're starting points ('-=1' '-=.7') adjusted to have the second one start at a better time..
//Most IMPO, I don't think the html is pulling the gsap src correctly. Chrome DevTools is showing a problem with the tl. in haminate()
const header = document.querySelector(".header")

function menuMaker(menuArray) {
  // debugger
  const sidebar = document.createElement("div")
  sidebar.classList.add("sidebar")
  const sidemenu = document.createElement("div")
  sidebar.appendChild(sidemenu)
  menuArray.map((i) => {
    const menuItem = document.createElement("li")
    menuItem.textContent = i
    sidemenu.appendChild(menuItem)
    return menuItem
  })



  const menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", haminate())
  return sidebar
}
console.log(menuMaker(menuItems))
const theMenu = menuMaker(menuItems)
header.appendChild(theMenu)

var burgerSidebar= document.getElementsByClassName("sidebar");
var sideText= document.getElementsByClassName("sidetext");

tl = new TimelineMax({paused:true, reversed:true});
tl.timeScale(1);
tl
.to(burgerSidebar, 1, {x:550, ease: Power2.easeOut}, '-=1')
.staggerFrom(sideText, 0.5, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=0.7")
.to(sideText, 0.2, {css:{color:"#000"}});

function haminate() {
 tl.reversed() ? tl.play() : tl.reverse();
}