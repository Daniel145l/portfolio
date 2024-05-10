// menu effect

function openM() {
    document.getElementById('menu-mobile').style.width = "75%";
    document.getElementById('menu-mobile').style.padding = "20px";
    document.getElementById('menu-mobile').style.borderRight = "7px solid #ff7700";

    document.getElementById("overlay").style.display = "block";

    document.getElementById('openIcon').style.display = "none";
    document.getElementById('closeIcon').style.display = "inline-block";
}

function closeM() {
    document.getElementById('menu-mobile').style.width = "0";
    document.getElementById('menu-mobile').style.padding = "0";
    document.getElementById('menu-mobile').style.borderRight = "none";

    document.getElementById("overlay").style.display = "none";

    document.getElementById('openIcon').style.display = "inline-block";
    document.getElementById('closeIcon').style.display = "none";
}

// typing effect

var txt = "Quer conhecer mais sobre mim?";
var speed = 80;

function typing() {
    var i = 0;
    var output = '';
    var isDeleting = false;

    function type() {
        if (isDeleting) {
            output = txt.substring(0, i - 1);
            i--;
        } else {
            output = txt.substring(0, i + 1);
            i++;
        }
        
        document.getElementById("txt-place").innerHTML = output;

        if (!isDeleting && i === txt.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Tempo de espera antes de começar a apagar o texto
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            setTimeout(type, 500); // Tempo de espera antes de começar a escrever novamente
        } else {
            setTimeout(type, speed);
        }
    }

    type();
}

window.onload = function() {
    typing();
};
