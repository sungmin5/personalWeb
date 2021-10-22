/*js for index */
//Global Variables
var GLOBAL_NAV_COUNTDOWN = 3000;

$(function(){
    var hideGlobalNavFunc = null;

    window.onscroll = function (e){
        if($('#global-navigation').prop('class').indexOf('hidden') > 0){
            $('#global-navigation').removeClass('glov-nav-hidden').addClass('glov-nav-shown');
        }
        if(hideGlobalNavFunc !== null){
            clearTimeout(hideGlobalNavFunc);
        } 
        if(window.pageYOffset > 55){
            hideGlobalNavFunc = waitAndHideGlobalNav();
        }
    };

    $('#global-navigation').hover(function(){
        clearTimeout(hideGlobalNavFunc);
    }, function(){
        if(window.pageYOffset > 55){
            hideGlobalNavFunc = waitAndHideGlobalNav();
        }
    });
    

})

function waitAndHideGlobalNav(){
    return setTimeout(function() {
        $('#global-navigation').removeClass('glov-nav-shown').addClass('glov-nav-hidden');
    }, GLOBAL_NAV_COUNTDOWN);
}