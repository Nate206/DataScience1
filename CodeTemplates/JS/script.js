document.addEventListener("scroll", function() {
    var image1 = 'greetings from mars.jpeg'; 
    var image2 = 'hello world.jpeg';
    var image3 = 'gale crater.jpeg';
    var image4 = 'cool glasses.jpeg'
    var pic = document.getElementById('picture'); 
    var scrollPos = window.scrollY

    if (scrollY < 1000) { 
        pic.src = image1; 
    } 
    else if (scrollY > 1000 && scrollY <= 2000){
        pic.src = 'hello world.jpeg';
    }
    else if (scrollY >2000 && scrollY <=4000){
        pic.src = 'gale crater.jpeg';
    }
    else if (scrollY > 400)
    pic.src = 'cool glasses.jpeg';

});