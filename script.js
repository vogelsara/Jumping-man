function jump () {
    var oldMan = document.getElementById("jumpingManImage");
    var sittingOldMan = document.getElementById("sittingManImage");
    var startingPositionY = 500;
    var positionY = startingPositionY;
    var id = setInterval(stepAnimation, 2);
    var goingUp = true;
    var velocity = 2;
    
    sittingOldMan.classList.remove("show");
    oldMan.classList.add("show");

    function stepAnimation () {
        if (goingUp) {
            if (positionY <= 0) {
                goingUp = false;
            } else {
                oldMan.style.top = positionY + "px";
                positionY -= velocity;
            }
        } else {
            if (positionY >= startingPositionY) {
                clearInterval(id);
                sittingOldMan.classList.add("show");
                oldMan.classList.remove("show");
            } else {
                oldMan.style.top = positionY + "px";
                positionY += velocity;
            }
        }        
    }
}