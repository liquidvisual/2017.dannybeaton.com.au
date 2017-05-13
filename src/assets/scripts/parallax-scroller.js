/*
    PARALLAX-SCROLLER.JS - Last updated: 08.05.17

    Usage: <div data-parallax-scroller="-0.3">
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var scrollElements = [];

    //-----------------------------------------------------------------
    // PARALLAX SCROLLER
    // Create cross browser requestAnimationFrame method:
    //-----------------------------------------------------------------

    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function(f){setTimeout(f, 1000/60)}

     //-----------------------------------------------------------------
     //
     //-----------------------------------------------------------------

    $('[data-parallax-scroll]').each(function(){
        var $this = $(this);
        var obj = {};
            obj.el = $this;
            obj.depth = $this.data('parallax-scroll');
        scrollElements.push(obj);
    });

    //-----------------------------------------------------------------
    //
    //-----------------------------------------------------------------

    function parallaxScroll(){
        var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically

        for (var item in scrollElements) {
            var target = scrollElements[item];
            var el = target.el;
            el[0].style.transform="translateY("+ Math.round(scrolltop * target.depth) + "px)";
        }
    }

    //-----------------------------------------------------------------
    //
    //-----------------------------------------------------------------

    window.addEventListener('scroll', function(){
        requestAnimationFrame(parallaxScroll) // call parallaxScroll() on next available screen paint
    }, false)

//--
}(jQuery));

//==================================================
//
//==================================================