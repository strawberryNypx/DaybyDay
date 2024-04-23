
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        menuShow(); 
    });
});

function carousel() {
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 3){
            counter = 1;
        }
    }, 4000);
}

carousel();