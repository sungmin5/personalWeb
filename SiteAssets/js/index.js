/*js for index */
//Global Variables
var GLOBAL_NAV_COUNTDOWN = 3000;

$(function(){
    var hideGlobalNavFunc = null;
    window.onscroll = function (e){
        if($('#global-navigation').css('top') == '-100px'){
            $('#global-navigation').css('top', "0px");
        }
        if(hideGlobalNavFunc !== null){
            clearTimeout(hideGlobalNavFunc);
            hideGlobalNavFunc = setTimeout(function() {
                $('#global-navigation').css('top', "-100px");
            }, GLOBAL_NAV_COUNTDOWN);
        } else{ 
            hideGlobalNavFunc = setTimeout(function() {
                $('#global-navigation').css('top', "-100px");
            }, GLOBAL_NAV_COUNTDOWN);
        }
    };


    $('#global-navigation').hover(function(){
        clearTimeout(hideGlobalNavFunc);
        console.log("TEST");
    }, function(){
        console.log("OUT");
        hideGlobalNavFunc = setTimeout(function() {
            $('#global-navigation').css('top', "-100px");
        }, GLOBAL_NAV_COUNTDOWN);
    });
    

})

