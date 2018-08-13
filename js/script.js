$(document).ready(function(){

    $("#name-header").css("opacity", "1");
    $("#name-header").css("top", "300px");

    onscroll = function(){

        if (window.scrollY != 0){
            $("#navbar").css('background', 'white');
        }
        else {
            $("#navbar").css('background', 'rgba(255, 255, 255, 0.85)');
        }

    }

})