(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),d=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",d),n.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();
//# sourceMappingURL=index.4fab9818.js.map