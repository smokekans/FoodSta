(()=>{const e={openMenu:document.querySelector("[data-menu-open]"),closeMenu:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function o(){e.menu.classList.toggle("is-open")}e.openMenu.addEventListener("click",o),e.closeMenu.addEventListener("click",o)})(),window.onscroll=function(){window.screen.width>=1200?scrollY<=70?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll"):scrollY<=120?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll")},(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}document.querySelectorAll("[data-modal-open]").forEach((e=>{console.log("1"),e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.14eab5b3.js.map
