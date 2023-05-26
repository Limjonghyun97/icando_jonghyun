$(document).ready(function() {
    var $carousel = $('.carousel');
    var $carouselItem = $('.carousel-item');
    var slideDistance = $carouselItem.outerWidth(true);
    var gap = 50;
    var currentIdx = 0;

    setInterval(function() {
        var $firstItem = $carouselItem.eq(0);
        var $currentItem = $carouselItem.eq(currentIdx);
        currentIdx = (currentIdx + 1) % $carouselItem.length;

        $carousel.animate({
            marginLeft: -slideDistance - gap
        }, {
            duration: 1500,
            queue: false,
            complete: function() {
                $carousel.append($firstItem);
                $carousel.css('marginLeft', 0);
                $carouselItem = $('.carousel-item');
                $carouselItem.each(function(i) {
                    $(this).attr('data-idx', i);
                });
                currentIdx = $currentItem.attr('data-idx');
            }
        });
    }, 0);
});



const adImages = document.querySelectorAll('.ad-img');
let currentImageIndex = 0;

function changeImage() {
    adImages[currentImageIndex].classList.remove('active');

    currentImageIndex++;
    if (currentImageIndex >= adImages.length) {
        currentImageIndex = 0;
    }
    adImages[currentImageIndex].classList.add('active');

    $('.ad-img').hide();
    $('.active').show();
}

setInterval(changeImage, 3000);

