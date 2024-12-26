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

    


setTimeout(function() {
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        autoplay: {
            delay: 3500,
        },
    });
}, 200);


var DyPreviewMode = new function() {

    var CHANGE_MODE = 'dyOnSiteEditor::changeMode';
    var ROTATE_BUTTON_SPACE = 100;
  
    var lastEvent = null;
    var landscape = false;
    var onSiteIFrame = null;
    var rotateButton = null;
    var aboutLink = null;
    var modes = {
      phone: {
        width: '320px',
        height: '568px'
      },
      phoneLandscape: {
        height: '320px',
        width: '568px'
      },
      tablet: {
        width: '768px',
        height: '1024px'
      },
      tabletLandscape: {
        height: '768px',
        width: '1024px'
      },
      desktop: {
        width: '100vw',
        height: '100vh'
      }
    };
  
    function resetClasses(iframe) {
      iframe.classList.remove('mobile');
      iframe.classList.remove('phone');
      iframe.classList.remove('phone-landscape');
      iframe.classList.remove('tablet');
      iframe.classList.remove('tablet-landscape');
    }
  
    function setMobileMode(iframe) {
      resetClasses(iframe);
      iframe.classList.add('mobile');
      getRotateButton().style.setProperty('display', 'block');
      getAboutLink().style.setProperty('display', 'block');
    }
  
    function setPhoneMode() {
      var iframe = getOnSiteIFrame();
      landscape = false;
      setMobileMode(iframe);
      iframe.classList.add('phone');
      var scale = calculateScale(iframe, modes.phone);
      modes.phone.scale = scale > 1 ? 1 : scale;
      switchModeStyle(iframe, modes.phone, modes.phone.scale);
    }
  
    function setPhoneLandscapeMode() {
      var iframe = getOnSiteIFrame();
      landscape = true;
      setMobileMode(iframe);
      iframe.classList.add('phone-landscape');
      switchModeStyle(iframe, modes.phoneLandscape, modes.phone.scale);
    }
  
    function setTabletMode() {
      var iframe = getOnSiteIFrame();
      landscape = false;
      setMobileMode(iframe);
      iframe.classList.add('tablet');
      var scale = calculateScale(iframe, modes.tablet);
      modes.tablet.scale = scale > 1 ? 1 : scale;
      switchModeStyle(iframe, modes.tablet, modes.tablet.scale);
    }
  
    function setTabletLandscapeMode() {
      var iframe = getOnSiteIFrame();
      landscape = true;
      setMobileMode(iframe);
      iframe.classList.add('tablet-landscape');
      switchModeStyle(iframe, modes.tabletLandscape, modes.tablet.scale);
    }
  
    function setDesktopMode() {
      var iframe = getOnSiteIFrame();
      resetClasses(iframe);
      switchModeStyle(iframe, modes.desktop, 1);
      getRotateButton().style.setProperty('display', 'none');
      getAboutLink().style.setProperty('display', 'none');
    }
  
    function switchModeStyle(iframe, dimension, scale) {
      iframe.style.setProperty('width', dimension.width);
      iframe.style.setProperty('height', dimension.height);
      iframe.style.setProperty('transform', 'scale(' + scale + ')');
    }
  
    function calculateScale(iframe, dimension) {
      var bodyStyle = window.getComputedStyle(document.body);
      var iframeStyle = window.getComputedStyle(iframe);
      var bodyWidth = parseInt(bodyStyle.width);
      var bodyHeight = parseInt(bodyStyle.height) - ROTATE_BUTTON_SPACE;
      var iframeWidth = parseInt(dimension.width) + getIFrameAddedWidth(iframeStyle);
      var iframeHeight = parseInt(dimension.height) + getIFrameAddedHeight(iframeStyle);
      return Math.min(bodyWidth/iframeWidth, bodyHeight/iframeHeight);
    }
  
    function getIFrameAddedWidth(iframeStyle) {
      return parseInt(iframeStyle.marginLeft)
        + parseInt(iframeStyle.marginRight)
        + parseInt(iframeStyle.borderLeftWidth)
        + parseInt(iframeStyle.borderRightWidth);
    }
  
    function getIFrameAddedHeight(iframeStyle) {
      return parseInt(iframeStyle.marginTop)
        + parseInt(iframeStyle.marginBottom)
        + parseInt(iframeStyle.borderTopWidth)
        + parseInt(iframeStyle.borderBottomWidth);
    }
  
    function getOnSiteIFrame() {
      if (!onSiteIFrame) {
        onSiteIFrame = document.getElementsByClassName('dy-onsite-iframe-source')[0];
      }
      return onSiteIFrame;
    }
  
    function getRotateButton() {
      if (!rotateButton) {
        rotateButton = document.getElementsByClassName('dy-rotate-preview')[0];
      }
      return rotateButton;
    }
  
    function getAboutLink() {
      if (!aboutLink) {
        aboutLink = document.getElementsByClassName('dy-about-mobile-view')[0];
      }
      return aboutLink;
    }
  
    this.listener = function listener(event) {
      if (event.data.action === CHANGE_MODE) {
        lastEvent = event;
          switch (event.data.mode) {
            case 'phone':
              setPhoneMode();
              break;
            case 'phone-landscape':
              setPhoneLandscapeMode();
              break;
            case 'tablet':
              setTabletMode();
              break;
            case 'tablet-landscape':
              setTabletLandscapeMode();
              break;
            default:
              setDesktopMode();
          }
        }
    };
  
    this.rotateDevice = function rotateDevice() {
      if (landscape) {
        switch (lastEvent.data.mode) {
          case 'phone-landscape':
            lastEvent.data.mode = 'phone';
            break;
          case 'tablet-landscape':
            lastEvent.data.mode = 'tablet';
            break;
        }
      } else {
        switch (lastEvent.data.mode) {
          case 'phone':
            lastEvent.data.mode = 'phone-landscape';
            break;
          case 'tablet':
            lastEvent.data.mode = 'tablet-landscape';
            break;
        }
      }
  
      DyPreviewMode.listener(lastEvent);
    };
  };
  
  window.addEventListener('message', DyPreviewMode.listener, false);