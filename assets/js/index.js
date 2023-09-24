window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach((e) => {
        var windowHeight = window.innerHeight;
        var revealTop = e.getBoundingClientRect().top;
        var revealPoint = 80;

        if(revealTop < windowHeight - revealPoint){
            e.classList.add('active');
        }
        else{
            e.classList.remove('active')
        }
    })
}

window.addEventListener("load", muncul);

function muncul(){
    var munculs = document.querySelectorAll('.muncul');
    munculs.forEach((e) => {
        e.classList.add('muncul-aktif');
    })
}

window.addEventListener("load", munculBawah);

function munculBawah(){
    var munculs = document.querySelectorAll('.muncul-bawah');
    munculs.forEach((e) => {
        e.classList.add('muncul-aktif-bawah');
    })
}

window.addEventListener("load", munculKanan);

function munculKanan(){
    var munculs = document.querySelectorAll('.muncul-kanan');
    munculs.forEach((e) => {
        e.classList.add('muncul-aktif-kanan');
    })
}

window.addEventListener("load", munculKiri);

function munculKiri(){
    var munculs = document.querySelectorAll('.muncul-kiri');
    munculs.forEach((e) => {
        e.classList.add('muncul-aktif-kiri');
    })
}