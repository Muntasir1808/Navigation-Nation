const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav(x) {
  //Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle("change");
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
      //Animate In-Overlay
      overlay.classList.remove('overlay-slide-left');
      overlay.classList.add('overlay-slide-right');

      // Animate In- Nav Items
      nav1.classList.remove('slide-out-1');
      nav1.classList.add('slide-in-1');
      nav1.classList.remove('slide-out-2');
      nav1.classList.add('slide-in-2');
      nav1.classList.remove('slide-out-3');
      nav1.classList.add('slide-in-3');
      nav1.classList.remove('slide-out-4');
      nav1.classList.add('slide-in-4');
      nav1.classList.remove('slide-out-5');
      nav1.classList.add('slide-in-5');
    }else {
      //Animate out - Overlay
      overlay.classList.remove('overlay-slide-right');
      overlay.classList.add('overlay-slide-left');

      // Animate Out- Nav Items
      nav1.classList.remove('slide-in-1');
      nav1.classList.add('slide-out-1');
      nav1.classList.remove('slide-in-2');
      nav1.classList.add('slide-out-2');
      nav1.classList.remove('slide-in-3');
      nav1.classList.add('slide-out-3');
      nav1.classList.remove('slide-in-4');
      nav1.classList.add('slide-out-4');
      nav1.classList.remove('slide-in-5');
      nav1.classList.add('slide-out-5');
    }
  }

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);