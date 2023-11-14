
    let prevScrollpos = window.scrollY;

    window.onscroll = function() {
      let currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").classList.remove("hidden");
        document.getElementById("toolsEva").classList.remove("hidden-eva");

      } 
      else {
        document.querySelector("header").classList.add("hidden");
        document.getElementById("toolsEva").classList.add("hidden-eva");
      }
      prevScrollpos = currentScrollPos;
    }