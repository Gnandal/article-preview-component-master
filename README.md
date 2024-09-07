# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/Gnandal/testimonials-grid-section-main)
- Live Site URL: [Demo](https://gnandal.github.io/testimonials-grid-section-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-First Flow
- JavaScript

### What I learned

Here are what I learned :

```css
  filter : "brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(4836%) hue-rotate(180deg) brightness(105%) contrast(108%)";

```
```js
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
```

## Author

- Website - [GNANDAL  ELISEE](https://gnandal-elisee.vercel.app)
- Frontend Mentor - [@Gnandal](https://www.frontendmentor.io/profile/Gnandal)
