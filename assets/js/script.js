
/** Begin Functions */

/**
 * Return fist element
 */
const queryElement = (selector) => {
    const element = document.querySelectorAll(selector);
    if(element.length > 0)
        return element[0];
    return null;
};

function hamClick(){
    const navShowClass = "nav-show";
    let nav = queryElement(".site-navigation");
    if(nav !== null) {
        if(nav.className.indexOf(navShowClass) > -1) {            
            nav.className = nav.className.replace(navShowClass, "");
        }
        else {
            nav.className = "site-navigation " + navShowClass;
        }
    }
}

function ClaculateBlogHeigh() {
    const height = window.innerHeight;
    let main = queryElement("body > main");
    if(main !== null){
        if(main.className.indexOf("home") === -1){
            const headerHeight = 115;
            const totalHeight = height - headerHeight;
            main.style = "min-height: " + totalHeight + "px";
        }
    }
}
/** End Functions */

// set hambuguer actions
const hamburguerSelector = document.querySelectorAll(".hamburguer");
if(hamburguerSelector.length > 0) {
    const hamburguer = hamburguerSelector[0];
    hamburguer.addEventListener("click", hamClick);
}

// Set height
ClaculateBlogHeigh();