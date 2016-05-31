function makePopulationGrow() {

    var $banner = $("#banner");

    var maxWidth = $banner.width();
    var maxHeight = $banner.height();

    var counter = 0;
    var timer = setInterval(function() {

        var $person = $("<i class='person fa'></i>");
        
        var randX = getRandomInt(0,maxWidth);
        var randY = getRandomInt(0,maxHeight);

        var personSize = getRandomInt(10,50);

        var gender = getRandomInt(0, 1);

        var genderClass = gender === 0 ? "fa-female" : "fa-male";
        $person.addClass(genderClass);

        $person.css({
            'top': randY + "px",
            'left': randX + "px",
            'font-size': personSize + "px"
        });

        $banner.append($person);

        counter++;
        if (counter === 500) {
            console.log("finished making the circles");
            clearInterval(timer);
        }

    }, 200);


}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}