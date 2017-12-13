## Website Performance Optimization portfolio project

### Automation 

This project uses Grunt to automate some tasks:

1. Resize of images to various sizes for differents screen sizes
1. Compress images
1. Minify CSS
1. Minify Javascript

Install the projects dependecies with this command:

  ```bash
  $> cd /path/to/project-folder
  $> npm install
  ```
  
To run the automated tasks use this command:

  ```bash
  $> cd /path/to/project-folder
  $> grunt
  ```
 
### Run the Project

The project is executed from its index.html file. The file can be found in the root folder of the project.  
 
### Project Changes

index.html had the following changes:

1. Resources replaced for minified version
1. Javascript resources changed to load asynchronous e moved to the bottom of HTML
1. style.min.css replaced for inline CSS
1. Google font resource moved to after the footer
1. Images changed for adequated resolution 


pizza.html had the following changes:

1. Resources replaced for minified version
1. views/css/style.min.css replaced for inline CSS
1. Images changed for adequated resolution

views/js/main.js had the following changes:

1. Images changed for adequated resolution
1. changePizzaSizes: 
    1. It was declared the randomPizza variable to hold querySelectorAll result and replace its use in the for loop
    1. It was changed the querySelectorAll for getElementsByClassName
    1. It was changed the use of determineDx to calculate the new width only once
1. updatePositions:
    1. scrollTop definition was moved to outside of the for loop because the elements iterated in the loop don't impact its value
1.  document.addEventListener('DOMContentLoaded':
    1. It was declared the variable to hold querySelector result and replace its use in the for loop
    1. It was removed the updatePositions() call because it isn't necessary update the elements position just after theirs creation
1. It was changed the generation of pizza elements to instantiate only one variable for element randomPizzas  