$(document).ready(function(){	
    //accordion top right side heade				   
	if($('body').hasClass('non_mobile')){
    $("#accordion .panelTab").on('click', function() {
    if (!$(this).parents('.panel').is('.active')) {
    $(this).parents('.panel').animate({
    width: "419px"
    }, 500, function (){ 
    if( $(this).hasClass('search') ) {
    $('input#SearchInput').focus();
    };
    }).addClass('active').siblings('.panel').animate({
    width: "35px"
    }, 500).removeClass('active');
    } else {
    $('#accordion .panel').removeClass('active').animate({
    width: "35px"
    }, 419);
    }
    }); 
    };

	//logo popup
	$("a#logo").on("contextmenu", function(e) {
        e.preventDefault();
        var targetModal = $(this).data('target');
        $(targetModal).modal("show");
      })

    });