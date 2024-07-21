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





const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const mess = document.querySelector("#message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
    Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "41316e49-be16-4639-8d1d-9f118dcb08f6",
        To : 'dreamdecorations.info@gmail.com',
        From : email.value,
        Subject : "Eveniment Dream Decorations",
        Body : mess.value
    }).then(
        message => {
            if (message == "OK") {
            Swal.fire({
                title: "Erfolg!",
                text: "Nachricht gesendet!",
                icon: "success"
              });
              }
            else alert(message)
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})