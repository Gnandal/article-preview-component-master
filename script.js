function toggleShareOptions() {
    const shareOptionComponent = document.querySelector(".share");
    const socialMediaComponent = document.querySelector(".social-media");
    const authorComponent = document.querySelector(".author");

    let classAdded = false;
    if(window.screen.availWidth > 950) {
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
}