document.addEventListener("scroll", function() {
    var image1 = "greetings from mars.jpeg"; // First image file path
    var image2 = "hello world.jpeg"; // Second image file path
    var pic = document.getElementById('images'); // Get the image element by its ID

    if (window.scrollY > 1000) { // Change image when the user has scrolled 200 pixels down
        pic.src = image1; // Set the source to the first image
    } else {
        pic.src = image2; // Set the source to the second image
    }
});