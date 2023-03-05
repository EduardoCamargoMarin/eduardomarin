
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").classList.remove("hidden");
      } 
      else {
        document.querySelector("header").classList.add("hidden");
      }
      prevScrollpos = currentScrollPos;
    }