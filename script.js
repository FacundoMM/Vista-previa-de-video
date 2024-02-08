console.log("page loaded...");


var x = document.getElementsByClassName("vid-s");


function PlayVid(y) {
    x[y].play();
}

function PauseVid(y) {
    x[y].pause();
}