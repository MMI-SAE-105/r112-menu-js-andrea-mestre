const toggle = document.querySelector("button");
const nav = document.querySelector("nav");



toggle.addEventListener("click", ()=>{
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    const body = document.querySelector("body");
    
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    if (isClosed) {
        body.classList.add("noscroll");
    }
    else {
        body.classList.remove("noscroll");
    }
});





