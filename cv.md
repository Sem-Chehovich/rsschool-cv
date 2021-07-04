# Sam Chehovich
***
## Contact Info:
* mail - semchehovich@gmail.com 
* phone - +375336833732
* github.com/Sem-Chehovich
***
## Skills:
* Computer Science
* HTML/Css 
* JS
* Basics Git & GitHub
 ***
## Code example
```javascript
const filterItems = (event) => {
    let button = event.target
    for (let i =0; i < filtersImages.length; i++) {
        filtersImages[i].classList.remove("hidden")
    }
    if (button.innerHTML === "Artwork") {
        for (let i = 0; i < filtersImages.length; i++){
            if (!filtersImages[i].classList.contains("artwork")) {
                filtersImages[i].classList.add("hidden");
            } 
        }
    }
    if (button.innerHTML === "Web Design") {
        for (let i = 0; i < filtersImages.length; i++){
            if (!filtersImages[i].classList.contains("web__design")) {
                filtersImages[i].classList.add("hidden");
            } 
        }
    }
    if (button.innerHTML === "Graphic Design"){
        for (let i = 0; i < filtersImages.length; i++){
            if (!filtersImages[i].classList.contains("graphic__design")) {
                filtersImages[i].classList.add("hidden");
            } 
        }
    }
}
```