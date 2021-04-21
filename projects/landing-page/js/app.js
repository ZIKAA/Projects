/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Create list with all the sections in the page
const pageSections = document.querySelectorAll("section");
//get the navigation menu bar element by id
const navigationList = document.getElementById("navbar__list");
//create fragment to create the new list virtually before appending to the docuement
const listFragment = document.createDocumentFragment();
//create class to be added in any element
//const activeClass = document.createAttribute("class");
//activeClass.value = "your-active-class";
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// This function shall style nav bar
function styleNavBar(){
	const navbar=document.getElementById("navbar__list");
	
	navbar.style.background= "rgb(136,203,171)";
    navbar.style.background= "linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%)";
}

//This function shall create element in the nav bar
function createListElement(item){
	let navText = item.getAttribute("data-nav");
	let linkElement = document.createElement("a");
	let linkNodeText =  document.createTextNode(navText);
	let listElement = document.createElement("li");
	linkElement.appendChild(linkNodeText);
	listElement.appendChild(linkElement);
	listElement.style.marginRight="20px";
	listFragment.append(listElement);

	constructMenuClickListener(linkElement,item);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/* This function shall construct a nav bar by creating 
 * element in the nav bar for each section in the page*/
function constructNavMenu(sec,navBar){
	sec.forEach((elm,index)=>{
		createListElement(elm);
	});
	navBar.appendChild(listFragment);
}

// Scroll to section on link click
/* This function create click event listener on each
 * element in the nav bar menu*/
function constructMenuClickListener(barLink,obj){
		barLink.addEventListener('click',()=>{
		obj.scrollIntoView({behavior: "smooth"});
	})
}

// Add class 'active' to section when near top of viewport
function moveActiveClassToSection(sec){
	window.addEventListener("scroll",()=>{
		sec.forEach((item,index)=>{
			const clientReact = item.getBoundingClientRect();
			//const navSecElm = item.getAttribute("data-nav");	
			const navMenuLinks = navigationList.querySelectorAll("a");			
			if((clientReact.top>0) && (clientReact.top<item.clientHeight)){
				item.classList.add("your-active-class");
				navMenuLinks[index].style.background = "green";
			}
			else
			{
				item.classList.remove("your-active-class");
				navMenuLinks[index].style.background ="linear-gradient(0deg, rgba(136,150,171,1) 0%, rgba(0,13,60,1) 100%)";
			}
		})		
	})

}

/**
 * End Main Functions
 * Begin Events
 * 
*/
styleNavBar();

// Build menu 
constructNavMenu(pageSections,navigationList);


// Set sections as active
moveActiveClassToSection(pageSections);

