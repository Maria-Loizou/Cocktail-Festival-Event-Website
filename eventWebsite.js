
document.addEventListener("DOMContentLoaded", function() {
   var form = document.querySelector('form')  
   form.onsubmit = function(event) {
        const name = event.target.name.value
        const email = event.target.email.value
        const message = event.target.message.value

        const fields = [name, email, message]
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].trim() === '') {
                alert('Input fields cannot be empty. Please enter a value.');
                event.preventDefault();
                return
            }  
        }
        alert("Thank you")
    }

    var images = ['carouselImage1.jpeg', 'carouselImage2.jpeg', 'carouselImage3.jpeg'];
    var currentIndex = 0;
    var carouselImg = document.getElementById('carouselImage');
    var prevButton = document.getElementById('prevButton')
    var nextButton = document.getElementById('nextButton')

    var incrementIndex = function(){
        currentIndex = currentIndex + 1;
        if (currentIndex > images.length -1) {currentIndex = 0}
        return currentIndex;
    }

    var decrementIndex = function(){
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {currentIndex = images.length -1}
        return currentIndex
    }

    nextButton.onclick = function(){
        carouselImg.setAttribute('src', images[incrementIndex(currentIndex)]);
    }

    prevButton.onclick = function(){
        carouselImg.setAttribute('src', images[decrementIndex(currentIndex)]);
    }
  });
