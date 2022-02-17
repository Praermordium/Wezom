import vars from '../vars';

vars.shoppingCart.addEventListener('click', (e) => {
    console.log(e.target.vars);
    isActive(e);
});

function isActive(e) {
    if (e.target.classList.contains('_active')){
        removeActive(e);
    } else {
        setActive(e);
    }
}

function removeActive(e) {
    e.target.classList.remove('_active');
    vars.productManagment.classList.remove('_active');
}
  
function setActive(e) {
    e.target.classList.add('_active');
    vars.productManagment.classList.add('_active');
}