
      window.addEventListener("load", (e) => {
        const $containerModal = document.getElementById("container-modal");
                                e.preventDefault();
                                $containerModal.classList.add("active");
                                window.addEventListener("scroll", noScroll);
      });

      window.addEventListener("click", (e) => {
        const $containerModal = document.getElementById("container-modal");
                                e.preventDefault();
                                $containerModal.classList.remove("active");
                                window.removeEventListener("scroll", noScroll);
      });

      function noScroll() {
        window.scrollTo(0,0);
      }      
