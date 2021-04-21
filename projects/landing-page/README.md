# Landing Page Project
## Table of Contents

* [Project Overview](#ProjectOverview)
* [Project Files Structure](#instructions)
* [List Of Helper APIs](#listofhelperapis)
* [List Of Main APIs](#listofmainapis)

## Project Overview
	- Build a dynaic unordered list based on the number of sections in the page. [Done]
	- Scroll to the correct section when you click on it in the navigation bar. [Done]
	- Dynamicaly determine the active section. [Done]
	- Give the active section slightly different color than the other sections. [Done]
### Extras:
	- Add an active state to your navigation items when a section is in the viewport. [Done]
	- Hide fixed navigation bar while not scrolling (it should still be present on page load).
	- Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
	- Make sections collapsible.
		
## Project Files Structure

```sh
css
- styles.css    
js
- app.js
README.md

index.html
```

## List Of Helper APIs

| API | Arguments | Description |
| ------ | ------ | ------ |
| styleNavBar() | None | This function shall style nav bar |
| createListElement(item) | item: section element | This function shall create element in the nav bar and takes |
| constructMenuClickListener(barLink,obj) | barLink: Links element<br>obj: sections element | This function create click event listener on each element in the nav bar menu |

## List Of Main APIs

| API | Arguments | Description |
| ------ | ------ | ------ |
| constructNavMenu(sec,navBar) | sec: nodeList of the page sections<br>navBar: nodeList of the navigation list elements |  This function shall construct a nav bar by creating element in the nav bar for each section in the page |
| moveActiveClassToSection(sec) | sec: nodeList of the page sections | Add class 'active' to section when near top of viewport |

