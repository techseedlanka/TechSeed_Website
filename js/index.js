document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.logos');
    const buttons = document.querySelectorAll('.buttons button');
    const dotsList = document.querySelectorAll('.dots');

    carousels.forEach((carousel, carouselIndex) => {
        const slides = carousel.querySelector('.logos-slide');
        const items = slides.querySelectorAll('.logoCarousel');
        const dots = dotsList[carouselIndex].querySelectorAll('li');
        let currentIndex = 0;
        let autoSlideInterval;
        
        function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        }
        
        function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
            }, 3000);
        }
        
        function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        }
        
      buttons[carouselIndex * 2].addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
        });
        
      buttons[carouselIndex * 2 + 1].addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
        });
        
        dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        });
        
      // Stop auto-slide on hover
        buttons.forEach(button => {
        button.addEventListener('mouseenter', stopAutoSlide);
        button.addEventListener('mouseleave', startAutoSlide);
        });

        startAutoSlide();
    });
});


// contact form

function validateForm() {
  const name = document.getElementById('message-name').value;
  const email = document.getElementById('message-email').value;
  const subject = document.getElementById('message-subject').value;
  const message = document.getElementById('message-message').value;

  if (name && email && subject && message) {
      changeLabel();
  }
}

function changeLabel() {
  const button = document.querySelector('button[type="submit"]');
  button.innerHTML = 'Sending!';
}


// subscription form

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYt85NOMfcffOF_rZqGmVpo_UMiz_Z16AnXLV27-tR6YQaft3pC1s1zogJsT16UQib/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("sub-success-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})