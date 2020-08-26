# SOFT166

Website created using HTML, CSS and Javascript/Jquery. Demonstrates basic knowledge of API and HTML requests usage by manipulating Phillips Hue smart lights using JSON. Bootstrap was used as a general framework with custom CSS used where needed. 

### Usage
Designed specifically for usage in the University of Plymouth using samrt lights, although functional outside of the university it is advisable to only use inside the university for the full experience of the project.

The game starts as soon as the play button is pressed with three rounds in total to win the game. The aim of the game is to look at the sequence the lights play and then play back the sequence in the correct order. Their are three rounds to the game with increasing difficulty, the first round tasks the user with remembering a sequence of three, the second a sequence of four and the final round a sequence of five. 

A correct answer will cause the box on the page and the light in the room to flash the same colour, an incorrect answer will cause all lights to flash red. Getting an incorrect answer will not fail the level or stop the game, the user can continue guessing after getting an incorrect answer.

Colour settings can be changed at any point during the game even whilst lights are being turnt on or off, however changes will not effect a light that is already turned on until it has been turned off.

### Features
* Colour blind settings
* Multiple browser support
* Suitable for mobile and tablets
* Responsive design

### Testing

| Chrome        | Firefox         | Edge|
| ------------- | ------------- |------- |
| ![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/chrome.gif "Chrome")  |  ![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/firefox.gif "Firefox")  |![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/edge.gif "Edge") |

| Mobile        | Tablet        |
| ------------- | ------------- |
| ![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/mobile.gif "Mobile")  |  ![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/tablet.gif "Tablet")  


A demonstration of the project can be found here. Because the lights cannot be seen alert messages are provided, in the full project the lights would flash in the correct sequence then the user would recite the sequence. - https://youtu.be/SHHy6xF8UaE

### Initial Design

Initally the project was all contained to one webpage. To better conform to the spec the main page and the game were split. An earlier version with everything on a single page would be preferal to use.

![alt text](https://github.com/JamieTremaine/SOFT166/blob/master/Documentation/Img/InitialDesign.gif "Inital Design")

### Additional Resorces

All additional resorces used in the project are appropriately commented when used.

* Jquery-Color - https://github.com/jquery/jquery-color
* Logo underline CSS - https://stackoverflow.com/questions/51148460/how-can-i-make-a-curved-text-underline/51148652*/
* Slider CSS - https://www.w3schools.com/howto/howto_css_switch.asp



