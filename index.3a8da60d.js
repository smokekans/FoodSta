var e;(()=>{const e={openMenu:document.querySelector("[data-menu-open]"),closeMenu:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenu.addEventListener("click",t),e.closeMenu.addEventListener("click",t)})(),window.onscroll=function(){window.screen.width>=1200?scrollY<=70?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll"):scrollY<=120?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll")},"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-backdrop-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.add("modal-open");var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){var o=this.closest(".modal");document.body.classList.remove("modal-open"),o.classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-backdrop-modal").classList.remove("active"),document.body.classList.remove("modal-open"))}),!1),t.addEventListener("click",(function(e){e.target===e.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))}))})),$(".responsive").slick({infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:2,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".single-item").slick();
//# sourceMappingURL=index.3a8da60d.js.map
