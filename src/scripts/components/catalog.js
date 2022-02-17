import vars from '../vars';

vars.catalogMenu.addEventListener('click', (e) => {
    const screenWidth = window.screen.width;
    if (screenWidth < 768){
        e.target.classList.remove('_pc');
        e.target.classList.add('_phone');
        isActive(e);
    } 
    else {
        e.target.classList.remove('_phone');
        e.target.classList.add('_pc');
        isActive(e);
    }
});

vars.catalogItem.forEach(item => {
    item.addEventListener('click', (e) => {
        unsetActive();
    });
});

function unsetActive() {
    if (vars.catalog.classList.contains('_active')) {
        vars.catalog.classList.remove('_active');
        vars.catalogMenu.classList.remove('_active');
    }
}

function isActive(e) {
    if (e.target.classList.contains('_active')){
        removeActive(e);
    } else {
        setActive(e);
    }
}

function removeActive(e) {
    if  (e.target.classList.contains('_phone')) {
        e.target.classList.remove('_active');
        vars.menu.classList.remove('_active');
    } else if (e.target.classList.contains('_pc')) {
        e.target.classList.remove('_active');
        vars.catalog.classList.remove('_active');
    }
     
}
  
function setActive(e) {
    if  (e.target.classList.contains('_phone')) {
        e.target.classList.add('_active');
        vars.menu.classList.add('_active');
        } else if (e.target.classList.contains('_pc')) {
        e.target.classList.add('_active');
        vars.catalog.classList.add('_active');
    }
  
}