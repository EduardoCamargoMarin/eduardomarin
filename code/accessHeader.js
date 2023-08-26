let prevScrollpos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").classList.remove("hidden");

    } 
    else {
      document.querySelector("header").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  }