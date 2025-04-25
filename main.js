const lenis = new Lenis();
function raf(time){
  lenis.raf(time)
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



// Cursor
let cursorDot = document.querySelector("[data-cursor-dot]");
let cursorOutline = document.querySelector("[data-cursor-out]");

let character = document.getElementById('character');
let lastMouseX = window.innerWidth / 2; // start in the middle

window.addEventListener("mousemove", (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 0, fill:"forwards" })



  
    // Mouse Pet
    let view_left = posX + 20;
    let view_top = posY + 25;

    if (posX < lastMouseX ) {
      character.classList.add('face-left'); // face left
      character.style.transform = "scaleX(1)";
      view_left = posX + 20;
      view_top = posY + 25;
    } else if (posX > lastMouseX) {
      character.classList.remove('face-left'); // face right
      character.style.transform = "scaleX(-1)";
      view_left = posX - 50;
      view_top = posY - -25;
    }
    character.animate({
      left: `${view_left}px`,
      top: `${view_top}px`
    }, { duration: 500, fill:"forwards" })

    lastMouseX = posX;
});

