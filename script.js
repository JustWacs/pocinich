const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Lorem", "Ipsum", "Dolor", "Sit Amet"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



const poci = document.querySelector('.poci');
const img = poci.querySelector('img');

poci.addEventListener('mouseenter', () => {
  gsap.to(img, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
});

poci.addEventListener('mousemove', (e) => {
  const containerRect = poci.getBoundingClientRect();
  const centerX = containerRect.left + containerRect.width / 2;
  const centerY = containerRect.top + containerRect.height / 2;
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - centerX) / 15; // Sesuaikan faktor pergerakan
  const deltaY = (mouseY - centerY) / 15; // Sesuaikan faktor pergerakan

  gsap.to(img, { x: deltaX, y: deltaY, duration: 0.2, ease: 'power2.out' });
});

poci.addEventListener('mouseleave', () => {
  gsap.to(img, { scale: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
});