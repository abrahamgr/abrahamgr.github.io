// set hambuguer actions

function hamClick(){
    const navShowClass = "nav-show";
    const navSelector = document.querySelectorAll(".site-navigation");
    if(navSelector.length > 0) {
        const nav = navSelector[0];
        if(nav.className.indexOf(navShowClass) > -1) {            
            nav.className = nav.className.replace(navShowClass, "");
        }
        else {
            nav.className = "site-navigation " + navShowClass;
        }
    }
}

const hamburguerSelector = document.querySelectorAll(".hamburguer");
if(hamburguerSelector.length > 0) {
    const hamburguer = hamburguerSelector[0];
    hamburguer.addEventListener("click", hamClick);
}