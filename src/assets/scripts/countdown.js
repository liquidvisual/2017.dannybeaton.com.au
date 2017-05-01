/*
    COUNTDOWN.JS - Last updated: 30.04.17

    NOTES: - https://codepen.io/liquidvisual/pen/ZKKQeN
           - https://github.com/mckamey/countdownjs
*/
//-----------------------------------------------------------------
// COUNTDOWN
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // TARGET DATE
    //-----------------------------------------------------------------

    var targetDate = new Date("November 01, 2017 12:00:00");

    //-----------------------------------------------------------------
    // CREATE COUNTDOWN
    //-----------------------------------------------------------------

    function createCountdown() {

        var counterHTML = ''
          + '<div class="countdown">'
          // + '<div class="digit-box"><div class="digit" data-months></div><div class="text">Months</div></div>'
          // + '<div class="digit-box"><div class="digit" data-weeks></div><div class="text">Weeks</div></div>'
          + '<div class="digit-box"><div class="digit" data-days></div><div class="text">Days</div></div>'
          + '<div class="digit-box"><div class="digit" data-hours></div><div class="text">Hours</div></div>'
          + '<div class="digit-box"><div class="digit" data-minutes></div><div class="text">Minutes</div></div>'
          + '<div class="digit-box"><div class="digit" data-seconds></div><div class="text">Seconds</div></div>'
          + '</div>';

          $('#last-titan-preorder-countdown').html(counterHTML);
    }

    //-----------------------------------------------------------------
    // RUN IT
    //-----------------------------------------------------------------

    (function timerLoop() {

        var counter = countdown(null, targetDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

        // IF FUTURE
        if (counter.value > 0) {
            // $('[data-years]').text(('0' + counter.years).slice(-2));
            // $('[data-months]').text(('0' + counter.months).slice(-2));
            // $('[data-weeks]').text(('0' + counter.weeks).slice(-2));
            $('[data-days]').text(('0' + counter.days).slice(-2));
            $('[data-hours]').text(('0' + counter.hours).slice(-2));
            $('[data-minutes]').text(('0' + counter.minutes).slice(-2));
            $('[data-seconds]').text(('0' + counter.seconds).slice(-2));

        // IF PAST
        } else {
            $('.countdown .digit').text('00'); // reset to ZERO
        }

        requestAnimationFrame(timerLoop);
    })();

    var counter = countdown(null, targetDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    //-----------------------------------------------------------------
    // INIT
    //-----------------------------------------------------------------

    createCountdown();

//--
}(jQuery));

//==================================================
//
//==================================================