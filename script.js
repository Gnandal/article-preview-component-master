const shareOptionComponent = document.querySelector(".share");
const socialMediaComponent = document.querySelector(".social-media");
const authorComponent = document.querySelector(".author");
let classAdded = false;

const toggleShareOptions = (event) => {

    if(window.innerWidth > 950) {
        shareOptionComponent.style.width = "fit-content";
        shareOptionComponent.style.backgroundColor = "#FFF";
        authorComponent.style.display = "flex"; 

        shareOptionComponent.childNodes[1].classList.remove("share-option-mobile");
        classAdded = shareOptionComponent.childNodes[1].classList.toggle("share-option-desktop");
    } else {
        shareOptionComponent.childNodes[1].classList.remove("share-option-desktop");
        classAdded = shareOptionComponent.childNodes[1].classList.toggle("share-option-mobile");
        
        authorComponent.style.display = classAdded ? "none" : "flex"; 
        
        shareOptionComponent.style.width = classAdded ? "100%" : "40%"
        shareOptionComponent.style.backgroundColor = classAdded ? "hsl(214, 17%, 51%)" : "#FFF"
    }

    socialMediaComponent.style.display = classAdded ? "flex" : "none";
    event.style.backgroundColor = classAdded ? "hsl(214, 17%, 51%)" : "hsl(210, 46%, 95%)";
    event.childNodes[0].style.filter = classAdded ? "brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(4836%) hue-rotate(180deg) brightness(105%) contrast(108%)" : "hue-rotate(0deg)";
}

onresize = (event) => {
    if(window.innerWidth > 950) {
        shareOptionComponent.style.width = "fit-content";
        shareOptionComponent.style.backgroundColor = "#FFF";
        authorComponent.style.display = "flex"; 

        shareOptionComponent.childNodes[1].classList.replace("share-option-mobile", "share-option-desktop");
    }else {
        shareOptionComponent.childNodes[1].classList.replace("share-option-desktop", "share-option-mobile");
        authorComponent.style.display = classAdded ? "none" : "flex"; 
        
        shareOptionComponent.style.width = classAdded ? "100%" : "20%"
        shareOptionComponent.style.backgroundColor = classAdded ? "hsl(214, 17%, 51%)" : " hsl(210, 46%, 95%)";
    }
};