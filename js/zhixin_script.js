document.querySelector('#hamburger').addEventListener('click', () => {
    if(document.querySelector('#hamburger').classList.contains('open')){
        document.querySelector('.mob-menu').style.display = "none";
        document.querySelector('#hamburger').classList.remove('open');
    }
    else{
        document.querySelector('.mob-menu').style.display = "flex";
        document.querySelector('#hamburger').classList.add('open');
    }
});