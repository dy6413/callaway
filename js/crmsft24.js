


const menuLinks = document.querySelectorAll('.nabList a');

menuLinks.forEach(function (link) {
link.addEventListener('click', function (event) {
    event.preventDefault(); // href="#" 동작 막기

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState('', '', link.getAttribute('href'));
});
});

// 스크롤 이벤트 처리
document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('scroll', function () {
    const secondGNBContainer = document.querySelector('.nabContainer');
    const heroBanner = document.querySelector('.top_bot');

    if (heroBanner.getBoundingClientRect().bottom <= 0) {
    secondGNBContainer.classList.add('show');
    } else {
    secondGNBContainer.classList.remove('show');
    }
});
});

window.addEventListener('scroll', handleScroll);

function handleScroll() {
const scrollBtn = document.getElementById('scroll-top-btn');
if (window.pageYOffset > 100) {
    scrollBtn.classList.add('show');
} else {
    scrollBtn.classList.remove('show');
}
}

function scrollToTop() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
}



var sections = $('section')
var nav = $('.nabList')
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
    nav.find('a').removeClass('active');
    sections.removeClass('active');
    
    $(this).addClass('active');
    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
});
});

nav.find('a').on('click', function () {
var $el = $(this)
    , id = $el.attr('href');

$('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
}, 500);

return false;
});


document.querySelector('.media-play-button').addEventListener('click', function () {
var videoBox = document.querySelector('.yt-video');
var videoPoster = document.querySelector('.media-content-thumbnail');
var videoPlayButton = document.querySelector('.media-play-button');
var videoPlaycon = document.querySelector('.video-play-container');

var video = videoBox.querySelector('video');

// videoBox.style.display = 'block';
videoPoster.style.display = 'none';
videoPlayButton.style.display = 'none';
videoPlaycon.style.display = 'none';
video.play();

// titleH2.style.paddingBottom = '0';
});
