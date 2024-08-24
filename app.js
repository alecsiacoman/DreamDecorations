const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


const galleryContainer = document.querySelector('.gallery__container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['Vorherige', 'Nächste'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery--item1');
            el.classList.remove('gallery--item2');
            el.classList.remove('gallery--item3');
            el.classList.remove('gallery--item4');
            el.classList.remove('gallery--item5');
        })

        this.carouselArray.slice(0,5).forEach((el, i) => {
            el.classList.add(`gallery--item${i+1}`);
        })
    }

    setCurrentState(direction) {
        if(direction.className.includes('Vorherige')){
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.updateGallery();




const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




const FORMSPARK_ACTION_URL = "https://submit-form.com/sVqEj3FvV";
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const mess = document.querySelector("#message");

async function submitForm() {
    if (!dataConsent.value) {
        mustCheck.value = true;
        toast.add({severity: "warn", summary: "Consent required to submit. Please check the box.", life: 5000});
        return;
    }
    
    email.value = ""
    name.value = ""
    message.value = ""
    dataConsent.value = false
    mustCheck.value = false

    toast.add({severity: "success", summary: "Submitted", detail: "Thanks for contacting us!", life: 30000});
}